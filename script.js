const addBtn = document.getElementById("btn_add_task");
const list = document.getElementById("tasks_list");
const taskName = document.getElementById("input_form");
const clearTasks = document.getElementById("btn_delete_tasks");

let tasks = [];

const showTasks = () => {
    list.innerHTML = "";
    tasks.forEach((t) => {
        const newTask = document.createElement("li");
        //newTask.className = "list-group-item";
        newTask.textContent = t;
        list.appendChild(newTask);
    });
}

const addTask = () => {
    const text = taskName.value;
    if (text != '') {
        tasks.push(text);
        taskName.value = "";
        showTasks();
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

const clearList = () => {
    const empty = document.createElement("li");
    tasks = [];
    localStorage.removeItem("tasks");
    showTasks();
    list.appendChild(empty)
}

addBtn.onclick = addTask;
clearTasks.onclick = clearList;


const lsTasks = localStorage.getItem("tasks");


if (lsTasks != null) {
    tasks = JSON.parse(lsTasks);
    showTasks();
}