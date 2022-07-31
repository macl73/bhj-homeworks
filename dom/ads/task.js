const rotator = document.querySelectorAll(".rotator");

rotator.forEach(element => {
    let activeSpan = element.querySelector(".rotator__case_active");
    activeSpan.setAttribute("style", `color: ${activeSpan.dataset.color}`);
    function ad() {
        activeSpan = element.querySelector(".rotator__case_active");
        
        let next = activeSpan.nextElementSibling;
        if (next == undefined) {
            next = element.firstElementChild;
        };
        next.setAttribute("style", `color: ${next.dataset.color}`);
        let timeout = next.dataset.speed;
        
        activeSpan.classList.remove("rotator__case_active");
        next.classList.add("rotator__case_active");
        
        setTimeout(ad, timeout);
    };
    setTimeout(ad, 0);
});

