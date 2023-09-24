// <![CDATA[
    var colours=new Array("#a6f", "#60f", "#60f", "#a6f", "#ccc"); // colours for top, right, bottom and left borders and background of bubbles
    var bubbles=66; // how many bubbles are moving at any given time
    var over_or_under="over"; // set to "over" for bubbles to always be on top, or "under" to allow them to float behind other objects
    
    /****************************
    *   JavaScript Bubble Bath  *
    *(c)2010-13 mf2fm web-design*
    *  http://www.mf2fm.com/rv  *
    * DON'T EDIT BELOW THIS BOX *
    ****************************/
    
    var swide=800;
    var shigh=600;
    var bubb=new Array();
    var bubbx=new Array();
    var bubby=new Array();
    var bubbs=new Array();
    var boddie;
    var ie_version=(navigator.appVersion.indexOf("MSIE")!=-1)?parseFloat(navigator.appVersion.split("MSIE")[1]):false;
    
    function addLoadEvent(funky) {
      var oldonload=window.onload;
      if (typeof(oldonload)!='function') window.onload=funky;
      else window.onload=function() {
        if (oldonload) oldonload();
        funky();
      }
    }
    
    addLoadEvent(bubba);
    
    function bubba() { if (document.getElementById) {
      var i, rats, div;
      boddie=document.createElement("div");
      boddie.style.position="fixed";
      boddie.style.top="0px";
      boddie.style.left="0px";
      boddie.style.overflow="visible";
      boddie.style.width="1px";
      boddie.style.height="1px";
      boddie.style.backgroundColor="transparent";
      boddie.style.zIndex="0";
      document.body.appendChild(boddie);
      set_width();
      for (i=0; i<bubbles; i++) {
        rats=createDiv("3px", "3px");
    
        div=createDiv("auto", "auto");
        rats.appendChild(div);
        div=div.style;
        div.top="1px";
        div.left="0px";
        div.bottom="1px";
        div.right="0px";
        div.borderLeft="1px solid "+colours[3];
        div.borderRight="1px solid "+colours[1];
    
        div=createDiv("auto", "auto");
        rats.appendChild(div);
        div=div.style;
        div.top="0px";
        div.left="1px";
        div.right="1px";
        div.bottom="0px"
        div.borderTop="1px solid "+colours[0];
        div.borderBottom="1px solid "+colours[2];
    
        div=createDiv("auto", "auto");
        rats.appendChild(div);
        div=div.style;
        div.left="1px";
        div.right="1px";
        div.bottom="1px";
        div.top="1px";
        div.backgroundColor=colours[4];
        if (ie_version && ie_version<10) div.filter="alpha(opacity=50)";
        else div.opacity=0.5;
    
        boddie.appendChild(rats);
        bubb[i]=rats.style;
        bubb[i].zIndex=(over_or_under=="over")?"1001":"0";
      }
      bubble();
    }}
    
    function bubble() {
      var c;
      for (c=0; c<bubbles; c++) if (!bubby[c] && Math.random()<0.333) {
        bubb[c].left=(bubbx[c]=Math.floor(swide/6+Math.random()*swide/1.5)-10)+"px";
        bubb[c].top=(bubby[c]=shigh)+"px";
        bubb[c].width="3px";
        bubb[c].height="3px"
        bubb[c].visibility="visible";
        bubbs[c]=3;
        break;
      }
      for (c=0; c<bubbles; c++) if (bubby[c]) update_bubb(c);
      setTimeout("bubble()", 40);
    }
    
    function update_bubb(i) {
      if (bubby[i]) {
        bubby[i]-=bubbs[i]/2+i%2;
        bubbx[i]+=(i%5-2)/5;
        if (bubby[i]>0 && bubbx[i]>0 && bubbx[i]<swide) {
          if (Math.random()<bubbs[i]/shigh*2 && bubbs[i]++<8) {
            bubb[i].width=bubbs[i]+"px";
            bubb[i].height=bubbs[i]+"px";
          }
          bubb[i].top=bubby[i]+"px";
          bubb[i].left=bubbx[i]+"px";
        }
        else {
          bubb[i].visibility="hidden";
          bubby[i]=0;
          return;
        }
      }
    }
    
    window.onresize=set_width;
    function set_width() {
      var sw_min=999999;
      var sh_min=999999;
      if (document.documentElement && document.documentElement.clientWidth) {
        if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
        if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
      }
      if (typeof(self.innerWidth)=='number' && self.innerWidth) {
        if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
        if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
      }
      if (document.body.clientWidth) {
        if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
        if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
      }
      if (sw_min==999999 || sh_min==999999) {
        sw_min=800;
        sh_min=600;
      }
      swide=sw_min;
      shigh=sh_min;
    }
    
    function createDiv(height, width) {
      var div=document.createElement("div");
      div.style.position="absolute";
      div.style.height=height;
      div.style.width=width;
      div.style.overflow="hidden";
      div.style.backgroundColor="transparent";
      return (div);
    }
    // ]]>