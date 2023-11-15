function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

document.addEventListener("DOMContentLoaded", function () {
    var number = getRandomInt(255)
    document.getElementById("1").textContent = number;
});

document.addEventListener("DOMContentLoaded", function () {
    var number = getRandomInt(255)
    document.getElementById("2").textContent = number;
});

document.addEventListener("DOMContentLoaded", function () {
    var number = getRandomInt(255)
    document.getElementById("3").textContent = number;
});

document.addEventListener("DOMContentLoaded", function () {
    setInterval(function () {
        var number = getRandomInt(255);
        document.getElementById("4").textContent = number;
    }, 100);
});