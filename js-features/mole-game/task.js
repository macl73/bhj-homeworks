const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

const getHole = index => document.getElementById(`hole${index}`);
let hole;
for (let i = 1; i <= 9; i++) {
    hole = getHole(i);
    hole.onclick = deadOrLost;
    function deadOrLost() {
        if (this.className.includes("hole_has-mole")) {
            dead.textContent++;
        } else  {
            lost.textContent++;
        };
        if (dead.textContent == 10) {
            dead.textContent = "0";
            lost.textContent = "0";
            alert("Победа!");
            }
        if (lost.textContent == 5) {
            dead.textContent = "0";
            lost.textContent = "0";
            alert("Вы проиграли!");
            };
    };
};