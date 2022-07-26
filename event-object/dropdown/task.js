const dropdownList = document.querySelectorAll(".dropdown");

for (let j = 0; j < dropdownList.length; j++) {

    const dropdownValue = dropdownList[j].querySelector(".dropdown__value");
    const dropdown = dropdownValue.closest("div.dropdown").querySelector(".dropdown__list");

    dropdownValue.addEventListener("click", () => dropdown.className = "dropdown__list dropdown__list_active");

    let itemList = Array.from(dropdownList[j].getElementsByClassName("dropdown__item"));

    for (let i = 0; i < itemList.length; i++) {
        
        let dropdownItem = itemList[i];
        let itemToActive = dropdownItem.closest("div.dropdown").querySelector("div.dropdown__value");

        dropdownItem.addEventListener("click", openDropdown);
    
        let dropdownLink = dropdownList[j].getElementsByClassName("dropdown__link");
        dropdownLink[i].onclick = (event) => event.preventDefault();

        function openDropdown() {
            itemToActive.textContent = dropdownItem.querySelector(".dropdown__link").textContent;
            dropdown.className = "dropdown__list";
        };
    };
};