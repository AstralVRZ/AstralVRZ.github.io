const K = "cfc71a327cd84200077e595e96245eaf"
const U = "AstralArchivist"

const getInfo = async () => {
    const request = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${U}&api_key=${K}&limit=1&format=json`)
    const json = await request.json();
    document.getElementById('songName').innerHTML = json.recenttracks.track[0].name;i
    document.getElementById('artistName').innerHTML = json.recenttracks.track[0].artist["#text"];
    document.getElementById('songLink').href = json.recenttracks.track[0].url
    if (json.recenttracks.track[0].image[2]["#text"] == "") {
        document.getElementById('songImage').src = "/Images/misc/player_default_album.png"
    } else {
        document.getElementById('songImage').src = json.recenttracks.track[0].image[3]["#text"];
    }
}
getInfo();

(function myLoop(i) {
  setTimeout(function() {
    getInfo();               
    if (--i) myLoop(i);
  }, 30000)
})(-1);  