const addBtn = document.getElementById("add_task");
const list = document.getElementById("tasks_list");
const taskName = document.getElementById("task_name");
const clearTasks = document.getElementById("clear_tasks");

let tasks = [];

const showTasks = () => {
    list.innerHTML = "";
    tasks.forEach((t) => {
        const newTask = document.createElement("li");
        newTask.className = "list-group-item";
        newTask.textContent = t;
        list.appendChild(newTask);
    });
}

const addTask = () => {
    const text = taskName.value;
    tasks.push(text);
    taskName.value = "";
    showTasks();
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

const clearList = () => {
    tasks = [];
    localStorage.removeItem("tasks");
    showTasks();
}

addBtn.onclick = addTask;
clearTasks.onclick = clearList;


const lsTasks = localStorage.getItem("tasks");


if (lsTasks != null) {
    tasks = JSON.parse(lsTasks);
    showTasks();
}