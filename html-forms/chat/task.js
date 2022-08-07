const chatWidget = document.querySelector(".chat-widget");
chatWidget.addEventListener("click", () => chatWidget.classList.add("chat-widget_active"));

const answerList = ["Что Вы там сказали?", "Добро пожаловать отсюда!", "От Вас пахнет, кажется!", "Давай до свиданья!", "Мы ничего не будем Вам продавать!", "Кто-то что-то сказал?", "Мы вам не ответим!"];

const chatWidgetInput = document.getElementById("chat-widget__input");

const chatWidgetMessages = document.getElementById("chat-widget__messages");

chatWidgetInput.addEventListener("focus", userTyping);

function userTyping() {
    document.addEventListener("keydown", enterMessage);

    function enterMessage(event) {
        
        if (chatWidgetInput.value) {
            if (event.key === "Enter") {
                let hours = new Date().getHours() < 10 ? `0${new Date().getHours()}` : `${new Date().getHours()}`;
                let minutes = new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : `${new Date().getMinutes()}`;
                let time = `${hours}:${minutes}`;
                chatWidgetMessages.innerHTML += `
                    <div class="message message_client">
                        <div class="message__time">${time}</div>
                        <div class="message__text">
                        ${chatWidgetInput.value}
                        </div>
                    </div>
                `;
                chatWidgetInput.value = null;
                setTimeout(() => {
                    chatWidgetMessages.innerHTML += `
                        <div class="message">
                            <div class="message__time">${time}</div>
                            <div class="message__text">
                            ${answerList[Math.floor(Math.random() * answerList.length)]}
                            </div>
                        </div>
                    `;
                }, 2000);
            };
        };
    };
};