const form = document.getElementById("signin__form");
const welcome = document.getElementById("welcome");
const signin = document.getElementById("signin");
const userId = document.getElementById("user_id");

if (localStorage.getItem("user_id")) {
    const savedUserId = localStorage.getItem("user_id");
    welcomeUser(savedUserId);
};

function welcomeUser(user) {
    signin.classList.remove("signin_active");
    welcome.classList.add("welcome_active");
    userId.textContent = user;
};

form.addEventListener("submit", (e) => {
    
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {

        if (xhr.readyState === 4) {

            if (xhr.response.success === false) {
                alert("Неверный логин/пароль");
            } else {
                welcomeUser(xhr.response.user_id);
                
                localStorage.setItem("user_id", `${xhr.response.user_id}`);
            };
        };
    };

    xhr.send(formData);

    e.preventDefault();
});

const welcomeExit = document.createElement("button");
welcomeExit.textContent = "Выйти";
welcomeExit.style.display = "block";
welcomeExit.style.marginTop = "20px";
welcomeExit.style.marginLeft = "auto";
welcomeExit.style.marginRight = "auto";
welcome.append(welcomeExit);

welcomeExit.addEventListener("click", () => {
    welcome.classList.remove("welcome_active");
    signin.classList.add("signin_active");
    localStorage.removeItem("user_id");

    const control = form.querySelectorAll(".control");
    control.forEach(elem => elem.value = null);
});