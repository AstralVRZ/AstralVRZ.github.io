document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('accept').addEventListener("click", function() {
        localStorage.setItem("TOS", "True");
        const element = document.querySelector('.disclaimer');
        element.style.display = 'none';
        const title = document.querySelector('#title');
        title.style.top = '3%';
    })
    var TOS = localStorage.getItem("TOS")
    if (TOS == "True") {
        const element = document.querySelector('.disclaimer');
        element.style.display = 'none';
        const title = document.querySelector('#title');
        title.style.top = '3%';
    }
})