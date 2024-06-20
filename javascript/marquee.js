document.addEventListener('DOMContentLoaded', function(){
    const marqueeContent = document.querySelectorAll('.marquee-content');
    marqueeContent.forEach(marqueeContent => {
        marqueeContent.addEventListener('mouseover', () => marqueeContent.style.animationPlayState = 'paused');
        marqueeContent.addEventListener('mouseout', () => marqueeContent.style.animationPlayState = 'running');
    });
})