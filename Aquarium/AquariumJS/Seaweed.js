        // <![CDATA[
            var speed=40; // lower number for faster animation
            var colour="#35AD6B"; // colour of weed
            var fronds=6; // how many fronds of seaweed, the more there are the slower the script runs
            var flength=0.66; // maximum height of the fronds compared to the screen height.  0.5 is half way to the top
            var fobble=6; // how much do the fronds wobble (8 is about the maximum sensible)
            var girth=40; // how thick are the fronds in pixels
            
            /***************************\
            *  Slithery Seaweed Effect  *
            *(c)2012-12 mf2fm web-design*
            *  http://www.mf2fm.com/rv  *
            * DON'T EDIT BELOW THIS BOX *
            \***************************/
            var fron=new Array();
            var frox=new Array();
            var frod=new Array();
            var frop=new Array();
            var froa=new Array();
            var frob=new Array();
            var swide, shigh;
            
            function addLoadEvent(funky) {
              var oldonload=window.onload;
              if (typeof(oldonload)!='function') window.onload=funky;
              else window.onload=function() {
                if (oldonload) oldonload();
                funky();
              }
            }
            
            addLoadEvent(slither);
            
            function inArray(needle, haystack) {
              var i;
              for (i=0; i<haystack.length; i++) {
                if (haystack[i]==needle) return true;
              }
              return false;
            }
            
            function slither() { if (document.getElementById) {
              var i, f, w, x=new Array();
              set_width();
              for (f=0; f<fronds; f++) {
                fron[f]=new Array();
                frod[f]=new Array();
                frox[f]=new Array();
                frop[f]=0;
                froa[f]=0.03+0.03*Math.random();
                do { i=Math.floor(girth/2*(2+Math.floor(2*(swide/girth-4)*Math.random()))); }
                while ( inArray(i, x) )
                x[f]=i;
                frob[f]=createDov(x[f]);
                document.body.appendChild(frob[f]);
              }
              for (f=0; f<fronds; f++) {
                h=Math.floor(shigh/2*flength*(0.66+0.33*Math.random()));
                for (i=0; i<=h; i++) {
                  w=2*Math.floor(girth/2*Math.sin(2.2*i/h));
                  frod[f][i]=0;
                  frox[f][i]=Math.floor(girth-w/2);
                  fron[f][i]=createDuv(w, frox[f][i], -2*(i-h));
                  frob[f].appendChild(fron[f][i]);
                }
                wavy_seaweed(f, i);
              }
            }}
            
            function createDov(left) {
              var d, s;
              d=document.createElement("div");
              s=d.style;
              s.position="fixed";
              s.bottom="0px";
              s.left=left+"px";
              s.overflow="visible";
              s.width=2*girth+"px";
              s.height=swide*flength+"px";
              s.backgroundColor="transparent";
              s.zIndex="998";
              if (navigator.appName!="Microsoft Internet Explorer") s.opacity="0.66";
              return (d);
            }
            
            function createDuv(width, left, bottom) {
              var d, s;
              d=document.createElement("div");
              s=d.style;
              s.position="absolute";
              s.height="2px";
              s.width=width+"px";
              s.left=left+"px";
              s.bottom=bottom+"px";
              s.overflow="hidden";
              s.backgroundColor=colour;
              if (navigator.appName=="Microsoft Internet Explorer") s.filter="alpha(opacity=66)";
              return (d);
            }
            
            function wavy_seaweed(f, h) {
              var i, x, s;
              s=h*h/fobble;
              frod[f][h-2]=Math.sin(frop[f]);
              fron[f][h-2].style.left=frox[f][h-2]+frod[f][h-2]+"px";
              frop[f]+=froa[f]+Math.random()*0.005;
              if (Math.random()>.95) {
                froa[f]=froa[f]-0.015+0.03*Math.random();
                if (froa[f]<0.03) froa[f]=0.03;
                if (froa[f]>0.08) froa[f]=0.08;
              }
              for (i=0; i<h-2; i++) {
                x=(1+i/s)*frod[f][i+1];
                if (Math.floor(x)!=Math.floor(frod[f][i])) fron[f][i].style.left=frox[f][i]+Math.floor(x)+"px";
                frod[f][i]=x;
              }
              setTimeout('wavy_seaweed('+f+','+h+')', speed);
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
            // ]]>