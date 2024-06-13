if (localStorage.getItem("Visits")== undefined ){
  localStorage.setItem("Visits","1")
} else {
  let Visits= Number(localStorage.getItem("Visits"))
  let visitsNew = Visits + 1
  localStorage.setItem("Visits",visitsNew)
}
if (localStorage.getItem("ID")== undefined ){
  let ID = crypto.randomUUID();
  localStorage.setItem("ID",ID)
}
let UA = navigator.userAgent;
let L = navigator.language;
let OS = "Unknown OS, maybe a niche Linux distro or a webcrawler.";
let V = localStorage.getItem("Visits")
let ID = localStorage.getItem("ID")
LNK = window.location.href
SLNK = LNK.split("#")
SRC = SLNK[1]
if (SLNK[1] == undefined) {
  SRC = "Direct link."
}

const WHU = "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTI1MDg5NTkzNjM4MTUyMTk0MC9feUJmZG1GNkJGLVM3VFM1dWtTZ0FhSUpsUERRNlgwWEpLc3VWaGVDak5YdW9LVHJqeUhhMEJxa25YTXppdnVkcFd5dA==";
console.log("%c// Please Don't mess with my webhook url :3 Instead you should let me know a way I could use to better hide it! //","font-size:20px; color:red;")

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

if (/AstralVRZ/i.test(UA) || localStorage.getItem("Bypass") == 1) {
    console.log("Welcome One With Many Names, no embed has been sent.");
} else if (navigator.globalPrivacyControl == true ){
  let data = {
    "embeds": [{
        "title": "A new visitor has Visited the AstralPlane!",
        "description": `User Agent: ${UA}\nLanguage: ${L}\nOperating System: ${OS} \nThis user has Global Privacy Control on.`,
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

}
else {
    let data = {
        "embeds": [{
            "title": "A new visitor has Visited the AstralPlane!",
            "description": `User Agent: ${UA}\nLanguage: ${L}\nOperating System: ${OS}\nVisit Source: ${SRC}\nTotal visits: ${V}\nID: ${ID}`,
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
};