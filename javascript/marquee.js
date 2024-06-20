document.addEventListener('DOMContentLoaded', function(){
    const marqueeContent = document.querySelector('.marquee-content');
        marqueeContent.addEventListener('mouseover', () => marqueeContent.style.animationPlayState = 'paused');
        marqueeContent.addEventListener('mouseout', () => marqueeContent.style.animationPlayState = 'running');
})