let UA = navigator.userAgent;
let L = navigator.language;
let OS = "Unknown OS, maybe a niche Linux distro or a webcrawler.";

const WHU = "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTIxMTY1NjUyODczNDcyNDE1Ni8tcDNmSldQUGxLSHZvaFM0U3ZKTmlzZEtkUjd0aVpMNm9CcVBmeW1CWVdXNk5RR2IwWWFOM2lCOG9TQWtZc2N0SmlJTw==";
LNK = window.location.href
SLNK = LNK.split("#")
SRC = SLNK[1]
if (SLNK[1] == undefined) {
  SRC = "Direct link"
}

if (/Windows|Win64|Win32/i.test(UA)) {
  OS = "Windows";
} else if (/Macintosh|MacIntel|MacPPC|Mac68K/i.test(UA)) {
  OS = "Mac OS";
} else if (/Android/i.test(UA)) {
  OS = "Android";
} else if (/CrOS/i.test(UA)) {
  OS = "Chrome OS";
} else if (/Linux|X11/i.test(UA)) {
  OS = "Linux";
} else if (/iPhone/i.test(UA)) {
  OS = "IOS";
} else {
  OS = "Unknown OS, maybe a niche Linux distro or a webcrawler.";
}

if (/AstralVRZ/i.test(UA)) {
    console.log("Welcome One With Many Names, no embed has been sent.");
} else {
    let data = {
        "embeds": [{
            "title": "A new visitor has Visited the AstralPlane!",
            "description": `User Agent: ${UA}\nLanguage: ${L}\nOperating System: ${OS}\nVisit Source: ${SRC}`,
            "color":   9055202
        }]
      };
      
      fetch(atob(WHU), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => console.log('Success:', response))
      .catch(error => console.error('Error:', error));
}