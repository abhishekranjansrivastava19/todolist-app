const newTask = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const totalTasks = document.getElementById("total-tasks");

let counter = 0;

function addTask() {
  if (newTask.value.trim() === "") {
    return;
  }
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");
  taskItem.innerHTML = `
    <input type="checkbox" class="task-done">
    <span class="task-text">${newTask.value}</span>
    <button class="task-delete">Delete</button>
  `;
  const taskDone = taskItem.querySelector(".task-done");
  taskDone.addEventListener("change", () => {
    if (taskDone.checked) {
      taskItem.classList.add("done");
    } else {
      taskItem.classList.remove("done");
    }
  });
  const taskDelete = taskItem.querySelector(".task-delete");
  taskDelete.addEventListener("click", () => {
    taskList.removeChild(taskItem);
    updateCounter();
  });
  taskList.appendChild(taskItem);
  newTask.value = "";
  updateCounter();
}

function updateCounter() {
  counter = taskList.children.length;
  totalTasks.textContent = `Total tasks: ${counter}`;
}

addTaskButton.addEventListener("click", addTask);
