if (/Android|iPhone|iPad|Opera Mini/i.test(navigator.userAgent)) {
    console.log("You are on mobile so I hid the webamp :3")
} else {
    new Webamp({
        initialTracks: [
            {metaData: {artist: "Izar", title: "Born of a Star",},
            url: "/Audio/BornOfaStar-Izar.m4a",},
    
            {metaData: {artist: "Jammin' Sam Miller", title: "Donkey Kong Country - Aquatic Ambience [Restored]",},
            url: "/Audio/AquaticAmbience.mp3",},
    
            {metaData: {artist: "JACKIE EXTREME",title: "BIZARRE LOVE TRIANGLE",},
            url: "/Audio/BizarreLoveTriangle.mp3",},
    
            {metaData: {artist: "machine girl",title: "Glass Ocean",},
            url: "/Audio/GlassOcean.mp3",},
    
            {metaData: {artist: "knylon/candlelitsmiles",title: "Pride (2023 Version)",},
            url: "/Audio/Pride2023.mp3",},
            
            {metaData: {artist: "Animadrop",title: "Into The Noise",},
            url: "/Audio/IntoTheNoise.m4a",},
    
            {metaData: {artist: "On Principle",title: "909Girl",},
            url: "/Audio/909Girl.mp3",},
        ],
        initialSkin: {url: "/Webamp/spaceskin.wsz"},
    }).renderWhenReady(app);
}