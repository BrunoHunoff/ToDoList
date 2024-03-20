const task = document.querySelector("#input-task");
const list = document.getElementById("task-list");
const inputAdd = document.getElementById("input-add");
const taskList = document.getElementById("task");

const listFirst = list.firstElementChild;

document.addEventListener('keypress', function(event) {
    if(event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const li = document.createElement("li");

    let text = task.value;
    if (text == "") {
        inputAdd.classList.add('hide');
        taskList.classList.remove('blur');
        return;
    }

    let novoItem = document.createTextNode(text);

    li.appendChild(novoItem);

    list.appendChild(li);

    task.value = "";

    inputAdd.classList.add('hide');
    taskList.classList.remove('blur');

}

function newTask() {
    taskList.classList.add('blur');
    inputAdd.classList.remove('hide');
}

