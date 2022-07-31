const fontSizeControl = Array.from(document.getElementsByClassName("font-size"));
const fontColorControl = document.querySelectorAll(".book__control_color .color");
const bgColorControl = document.querySelectorAll(".book__control_background .color");

const book = document.getElementById("book");

fontSizeControl.forEach((element) => { 
    element.onclick = (event) => event.preventDefault();
    element.addEventListener("click", () => {
        fontSizeControl.forEach((elem) => elem.classList.remove("font-size_active"));
        element.classList.add("font-size_active");

        const fontSizeActive = document.querySelector(".font-size_active");
        book.classList.remove("book_fs-small", "book_fs-big");
        if (fontSizeActive.dataset.size === "small") {
            book.classList.add("book_fs-small");
        } else if (fontSizeActive.dataset.size === "big") {
            book.classList.add("book_fs-big");
        };
    });
});

fontColorControl.forEach((element) => { 
    element.onclick = (event) => event.preventDefault();
    element.addEventListener("click", () => {
        fontColorControl.forEach((elem) => elem.classList.remove("color_active"));
        element.classList.add("color_active");

        const fontColorActive = fontColorControl[0].parentElement.querySelector(".color_active");
        book.classList.remove("book_color-black", "book_color-gray", "book_color-whitesmoke");
        if (fontColorActive.dataset.textColor === "black") {
            book.classList.add("book_color-black");
        } else if (fontColorActive.dataset.textColor === "gray") {
            book.classList.add("book_color-gray");
        } else if (fontColorActive.dataset.textColor === "whitesmoke") {
            book.classList.add("book_color-whitesmoke");
        };
    });
});

bgColorControl.forEach((element) => { 
    element.onclick = (event) => event.preventDefault();
    element.addEventListener("click", () => {
        bgColorControl.forEach((elem) => elem.classList.remove("color_active"));
        element.classList.add("color_active");

        const bgColorActive = bgColorControl[0].parentElement.querySelector(".color_active");
        book.classList.remove("book_bg-black", "book_bg-gray", "book_bg-white");
        if (bgColorActive.dataset.bgColor === "black") {
            book.classList.add("book_bg-black");
        } else if (bgColorActive.dataset.bgColor === "gray") {
            book.classList.add("book_bg-gray");
        } else if (bgColorActive.dataset.bgColor === "white") {
            book.classList.add("book_bg-white");
        };
    });
});