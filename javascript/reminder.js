document.addEventListener('DOMContentLoaded', function() {
    const reminder = document.getElementById('reminder');
    const closeButton = document.getElementById('close');
    const closeButtonBig = document.getElementById('closeButton')
    const pos1 = Math.floor(Math.random() * 90);
    const pos2 = Math.floor(Math.random() * 80);
    const randInt = Math.floor(Math.random()* 10)
    var insert = new Audio('Audio/WindowsXPHardwareInsert.mp3');
    var remove = new Audio('Audio/WindowsXPHardwareRemove.mp3');
    var click = new Audio('Audio/winclick.mp3');

    if (randInt == 1 || randInt == 5 || randInt == 9 || randInt == 3) {
        reminder.style.display = 'block';
        insert.play();
    }

    reminder.style.top = `${pos1}%`;
    reminder.style.left = `${pos2}%`;
    
    closeButton.addEventListener('click', function() {
        reminder.style.display = 'none';
        click.play();
        setTimeout(function () {remove.play();},200);
    });
    closeButtonBig.addEventListener('click', function() {
        reminder.style.display = 'none';
        click.play();
        setTimeout(function () {remove.play();},200);
    });
});