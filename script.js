// Dark / Bright Mode

const modeBtn = document.getElementById("modeBtn");

modeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        modeBtn.innerHTML = "☀️";
    } else {
        modeBtn.innerHTML = "🌙";
    }

});