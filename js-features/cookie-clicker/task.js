const clickerCount = document.getElementById("clicker__counter");

const cookiePicture = document.getElementById("cookie");
cookiePicture.style.display = "block";

let timeCounterText = document.createElement('div');
timeCounterText.id = "clicker_time_counter";
timeCounterText.textContent = "Скорость клика: ";
timeCounterText.style.display = "inline";

let timeCounter = document.createElement("span");
timeCounter.id = "time_counter";
timeCounter.textContent = "0";

cookiePicture.before(timeCounterText);
timeCounterText.after(timeCounter);

let timerStart = new Date;

function cookieResize() {
    if (cookiePicture.width > 220) {
        cookiePicture.width -= 50;
    } else if (cookiePicture.width < 220) {
        cookiePicture.width += 50;
    };
    let timerEnd = new Date;
    clickerCount.textContent++;
    timeCounter.textContent = ((timerEnd - timerStart) / clickerCount.textContent).toFixed(2);
    timerStart = timerEnd;
};

cookiePicture.addEventListener("click", cookieResize);