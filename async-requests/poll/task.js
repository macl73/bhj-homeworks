const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.responseType = 'json';
xhr.send();
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        pollTitle.innerText = xhr.response.data.title;
        const answerList = xhr.response.data.answers;
        for (let i = 0; i < answerList.length; i++) {
            pollAnswers.insertAdjacentHTML("beforeend",
                `<button class="poll__answer" data-id="${i}" style="margin-right: 10px">
                    ${answerList[i]}
                </button>`
            );
        };
        const buttonList = document.querySelectorAll(".poll__answer");
        for (let button of buttonList) {
            button.onclick = () => {
                alert("Спасибо, ваш голос засчитан!");
            
                const feed = new XMLHttpRequest;
                feed.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
                feed.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                feed.responseType = 'json';
                feed.send(`vote=${xhr.response.id}&answer=${button.dataset.id}`);
                feed.onreadystatechange = () => {
                    if (feed.readyState === 4) {
                        pollAnswers.remove();

                        for (let elem of feed.response.stat) {
                            pollTitle.insertAdjacentHTML("beforeend",
                                `<div class="poll__feed">
                                    ${elem.answer}: <strong>${elem.votes}</strong>
                                </button>`
                            );
                        };    
                    };
                };
            };
        };
    };
};