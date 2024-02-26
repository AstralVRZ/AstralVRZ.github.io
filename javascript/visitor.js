let UA = navigator.userAgent
let L = navigator.language
const WHU = "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTIxMTY1NjUyODczNDcyNDE1Ni8tcDNmSldQUGxLSHZvaFM0U3ZKTmlzZEtkUjd0aVpMNm9CcVBmeW1CWVdXNk5RR2IwWWFOM2lCOG9TQWtZc2N0SmlJTw=="

if (/AstralVRZ/i.test(navigator.userAgent)) {
    console.log("Welcome Jea, no embed has been sent.")
} else {
    let data = {
        "embeds": [{
            "title": "A new visitor has Visited the AstralPlane!",
            "description": `User Agent: ${UA}\nLanguage: ${L}`,
            "color":  9055202
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