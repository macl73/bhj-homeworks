const timer = document.getElementById("timer");
let time = new Date(timer.textContent * 1000);

function watch(time) {
    let hh = Math.floor(time / 3600000) < 10 ? `0${Math.floor(time / 3600000)}` : `${Math.floor(time / 3600000)}`;
    let mm = Math.floor(time / 60000) < 10 ? `0${Math.floor(time / 60000)}` : `${Math.floor(time / 60000)}`;
    let ss = time / 1000 < 10 ? `0${time / 1000}` : `${time / 1000}`;
    return hh + ":" + mm + ":" + ss;
};

timer.textContent = watch(time);

let countdown = setInterval(() => {
    time = time - 1000;
    timer.textContent = watch(time);
}, 1000);
setTimeout(() => {
    clearInterval(countdown);
    alert("Вы победили в конкурсе");
    window.location.assign("./demo.zip");
}, time);