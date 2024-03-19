const task = document.querySelector("#input-task");
const list = document.getElementById("task-list");
const inputAdd = document.getElementById("input-add");
const taskList = document.getElementById("task");

const listFirst = list.firstElementChild;

function addTask() {
    const li = document.createElement("li");

    let text = task.value;

    if (text == "") {
        inputAdd.classList.add('hide');
        taskList.classList.remove('hide');
        return;
    }

    let novoItem = document.createTextNode(text);

    li.appendChild(novoItem);

    list.appendChild(li);

    inputAdd.classList.add('hide');
    taskList.classList.remove('hide');
}

function newTask() {
    taskList.classList.add('hide');
    inputAdd.classList.remove('hide');
}
