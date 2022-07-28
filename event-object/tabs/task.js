const tabsList = Array.from(document.querySelectorAll(".tabs"));

for (let j = 0; j < tabsList.length; j++) {

    const tabNavigation = Array.from(tabsList[j].querySelectorAll(".tab"));
    const tabContents = Array.from(tabsList[j].querySelectorAll(".tab__content"));

    for (let i = 0; i < tabNavigation.length; i++) {
        tabNavigation[i].addEventListener("click", tabChange);
        function tabChange() {
            tabNavigation.forEach((element) => element.className = "tab");
            tabContents.forEach((element) => element.className = "tab__content");
            tabNavigation[i].className = "tab tab_active";
            tabContents[i].className = "tab__content tab__content_active";
        };
    };
};