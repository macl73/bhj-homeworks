const menuList = document.querySelectorAll(".menu_main");

for (let i = 0; i < menuList.length; i++) {
    const menuLinks = menuList[i].querySelectorAll("ul.menu_main li.menu__item a.menu__link");

    const activeItems = [];
  
    for (let j = 1; j < menuLinks.length; j++) {
        const menuItem = menuLinks.item(j);
        menuItem.onclick = activateMenu;
        const itemToActive = menuItem.closest("li").querySelector(".menu");
        
        function activateMenu() {
            if (itemToActive === activeItems[0]) {
                itemToActive.className = "menu menu_sub";
                activeItems.shift();
            } else if (itemToActive == null) {
                return;
            } else {
                activeItems.forEach(element => element.className = "menu menu_sub");
                itemToActive.className = "menu menu_sub menu_active";
                activeItems[0] = itemToActive;
            };
            return false;
        };
    };
};