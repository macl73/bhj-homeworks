const interestList = document.querySelectorAll(".interest__check");

for (let i = 0; i < interestList.length; i++) {

        const interestActive = interestList[i].parentElement.nextElementSibling;

        if (interestActive !== null) {
        interestList[i].addEventListener("change", () => {
            const interestActiveList = interestActive.querySelectorAll(".interest__check");

            interestActiveList.forEach(elem => {
                if (interestList[i].checked == true) {
                    elem.checked = true;
                } else {
                    elem.checked = false;
                };
            });
        });       
    };
};