document.addEventListener('DOMContentLoaded', function() {
    var isMobile = /Android|iPhone|iPad|Opera Mini/i.test(navigator.userAgent);
    var discordLink = document.getElementById('discordLink');
    var mobileText = document.getElementById('mobile');

    if (isMobile) {
        discordLink.style.display = 'none';
    }
    else{
        mobileText.style.display = 'none';
    }
});