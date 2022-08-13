const productQuantityControl = document.querySelectorAll(".product__quantity-control");
const cart = document.querySelector(".cart__products");

cart.innerHTML = localStorage.getItem("cartHTML");

const cartProductDelete = Array.from(cart.getElementsByClassName("cart__product-delete"))

    for (let item of cartProductDelete) {
        item.addEventListener("click", () => {
            item.closest(".cart__product").remove();
            localStorage.setItem("cartHTML", cart.innerHTML);
        });
    };

for (let elem of productQuantityControl) {
    elem.addEventListener("click", () => {
        const productQuantityValue = elem.parentElement.querySelector(".product__quantity-value");
        if (elem.classList.contains("product__quantity-control_dec") && productQuantityValue.textContent != 1) {
            productQuantityValue.textContent--;
        } else if (elem.classList.contains("product__quantity-control_inc")) {
            productQuantityValue.textContent++;
        };
    });
};

const productAdd = document.querySelectorAll(".product__add");

for (let elem of productAdd) {
    elem.addEventListener("click", () => {

        const cartContent = Array.from(cart.getElementsByClassName("cart__product"));

        for (let element of cartContent) {
            if (element.dataset.id == elem.closest(".product").dataset.id) {
                const value = Number(element.querySelector(".cart__product-count").textContent);
                const plusValue = Number(elem.closest(".product").querySelector(".product__quantity-value").textContent.trim());

                element.querySelector(".cart__product-count").textContent = value + plusValue;
                localStorage.setItem("cartHTML", cart.innerHTML);

                /*let er = elem.closest(".product").querySelector(".product__image-jump");
                console.log(er)

                er.classList.add("product__image-jump-active");
                let y = 60;
                let x = 0;
                const ty = setInterval(() => {
                    x += 10
                    y -= 10
                    er.setAttribute("style", `top: ${y}px; left: ${x}px`)
                }, 1000)*/
            return;
            };
        };

        const product = elem.closest(".product");
       
        const productQuantityValue = product.querySelector(".product__quantity-value").textContent.trim();
        cart.insertAdjacentHTML("beforeend", 
            `<div class="cart__product" data-id="${product.dataset.id}">
                <img class="cart__product-image" src="${product.querySelector(".product__image").getAttribute("src")}">
                <div class="cart__product-count">${productQuantityValue}</div>
                <div class="cart__product-delete">Удалить из корзины</div>
            </div>`);
            
            const cartProductDelete = Array.from(cart.getElementsByClassName("cart__product-delete"))

            for (let item of cartProductDelete) {
                item.addEventListener("click", () => {
                    item.closest(".cart__product").remove();
                    localStorage.setItem("cartHTML", cart.innerHTML);
                });
            };
            localStorage.setItem("cartHTML", cart.innerHTML);
    });
};

