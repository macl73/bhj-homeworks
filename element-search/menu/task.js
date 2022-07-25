const menuList = document.querySelectorAll(".menu_main");

for (let i = 0; i < menuList.length; i++) {
    const menuLinks = menuList[i].getElementsByClassName("menu__link");

    const activeItems = [];
  
    for (let j = 1; j < menuLinks.length; j++) {
        const menuItem = menuLinks.item(j);
        menuItem.onclick = activateMenu;
        const itemToActive = menuItem.closest("li").querySelector(".menu");
        function activateMenu() {
            activeItems.forEach(element => element.className = "menu menu_sub");
            itemToActive.className = "menu menu_sub menu_active";
            activeItems.push(itemToActive);
            return false;
        };
    };
};