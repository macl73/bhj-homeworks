const reveal = document.querySelectorAll(".reveal");

document.addEventListener("scroll", () => {
    reveal.forEach(element => {
        const revealTop = element.getBoundingClientRect().top;
        const revealBottom = element.getBoundingClientRect().bottom;
        if (revealTop < window.innerHeight && revealBottom > 0) {
            element.classList.add("reveal_active");
        } else {
            element.classList.remove("reveal_active");
        };
    });
});