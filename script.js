
let createForm = document.querySelector('.form');
let taskInput = document.querySelector('#task-input');
let addButton = document.querySelector('#add-task-btn')
let showTask = document.querySelector(".show-tasks");
let templateTask = document.querySelector(".template-task");
let emptyList = document.querySelector(".empty-list");



createForm.addEventListener('click', addTask);
function addTask(event) {
  if (event.target.localName == "button") {
    if (!emptyList.hidden) emptyList.hidden = true;
    
    let newTask = createTask(taskInput.value);
    showTask.prepend(newTask);
    taskInput.value = "";
    taskInput.focus();

  }
}

function createTask(text) {
  let div = templateTask.content.cloneNode(true);
  let textValue = div.querySelector("#text-value");
  textValue.append(text);
  return div;
}

showTask.addEventListener('click', deleteTask);
function deleteTask(event) {
  if (event.target.dataset.action !== 'delete') return;

  let parenNode = event.target.closest('.task');
  parenNode.remove();
  let tasksAll = document.querySelectorAll(".task");
  if (tasksAll.length === 0) {
    emptyList.hidden = false;
  }
}

showTask.addEventListener('click', doneTask);

function doneTask(event) {
  if (event.target.dataset.action !== 'done') return;

  let parenNode = event.target.closest('.task');
  let textTask = parenNode.querySelector('#text-value');
  textTask.classList.toggle('done-task');

}
