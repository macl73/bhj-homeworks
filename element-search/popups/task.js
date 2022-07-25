const modalMain = document.getElementById("modal_main");
modalMain.className = "modal modal_active";

const modalClose = document.querySelectorAll("div.modal__close");

const showSuccess = document.querySelector(".show-success");

const modalSuccess = document.getElementById("modal_success");

for (let i = 0; i < modalClose.length; i++){
    modalClose[i].onclick = () => modalClose[i].closest("div.modal").className = "modal";
};

showSuccess.onclick = () => {
    modalMain.className = "modal";
    modalSuccess.className = "modal modal_active";
}