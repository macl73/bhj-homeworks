const taskInput = document.getElementById("task__input");
const taskAdd = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");

tasksList.innerHTML = localStorage.getItem("onLoadHTML");

let taskRemoveList = Array.from(document.getElementsByClassName("task__remove"));
for (let i = 0; i < taskRemoveList.length; i++) {
    taskRemoveList[i].onclick = () => {
        taskRemoveList[i].closest(".task").remove();
        localStorage.setItem("onLoadHTML", tasksList.innerHTML);
        return false;
    };
};

taskAdd.onclick = (event) => event.preventDefault();
taskAdd.addEventListener("click", () => {
    tasksList.insertAdjacentHTML("beforeend", 
    `<div class="task">
        <div class="task__title">
            ${taskInput.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`);

    taskInput.value = null;

    let taskRemoveList = Array.from(document.getElementsByClassName("task__remove"));
    for (let i = 0; i < taskRemoveList.length; i++) {
        taskRemoveList[i].onclick = () => {
            taskRemoveList[i].closest(".task").remove();
            localStorage.setItem("onLoadHTML", tasksList.innerHTML);
            return false;
        };
    };

    localStorage.setItem("onLoadHTML", tasksList.innerHTML);
});

