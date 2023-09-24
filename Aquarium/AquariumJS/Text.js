document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        var elementToHide = document.getElementById("myText");
        elementToHide.style.display = "none";
    }, 5000); // 5000 milliseconds = 5 seconds
});