document.addEventListener('DOMContentLoaded', function() {
    const reminder = document.getElementById('reminder');
    const closeButton = document.getElementById('close');
    const closeButtonBig = document.getElementById('closeButton')
    const Minimize = document.getElementById('Minimize')
    const Maximize = document.getElementById('Maximize')
    const pos1 = Math.floor(Math.random() * 90);
    const pos2 = Math.floor(Math.random() * 80);
    const randInt = Math.floor(Math.random()* 10)
    var insert = new Audio(window.location.origin + '/Audio/WindowsXPHardwareInsert.mp3');
    var remove = new Audio(window.location.origin + '/Audio/WindowsXPHardwareRemove.mp3');
    var click = new Audio(window.location.origin + '/Audio/winclick.mp3');
    var error = new Audio(window.location.origin + '/Audio/WindowsXPError.mp3')

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
    Minimize.addEventListener('click',function(){
        error.play();
    });
    Maximize.addEventListener('click',function(){
        error.play();
    });
});