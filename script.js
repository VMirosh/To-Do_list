
let createForm = document.querySelector('.form');
let taskInput = document.querySelector('#task-input');
let addButton = document.querySelector('#add-task-btn')
let showTask = document.querySelector(".show-tasks");
let templateTask = document.querySelector(".template-task");
let emptyList = document.querySelector(".empty-list");


document.addEventListener('keydown', function (event) {

  if (event.key == 'Enter') {
    if (!emptyList.hidden) emptyList.hidden = true;
    let newTask = createTask(taskInput.value);
    showTask.prepend(newTask);
    taskInput.value = "";
    taskInput.focus();
    
  } else if (event.key == 'Backspace') {
    let tasksAll = document.querySelectorAll(".task");
    let deletefirst = document.querySelector(".task");
    deletefirst.remove();
    if (tasksAll.length === 1) {
      emptyList.hidden = false;
      return;
    }
  }
});

createForm.addEventListener('click', addTask);
showTask.addEventListener('click', deleteTask);

showTask.addEventListener('click', doneTask);

function addTask(event) {
  if (event.target.localName !== "button") return;
  if (!emptyList.hidden) emptyList.hidden = true;
  let newTask = createTask(taskInput.value);
  showTask.prepend(newTask);
  taskInput.value = "";
  taskInput.focus();


}
function createTask(text) {
  let div = templateTask.content.cloneNode(true);
  let textValue = div.querySelector("#text-value");
  textValue.append(text);
  return div;
}

function deleteTask(event) {
  debugger
  if (event.target.dataset.action !== 'delete') return;

  let parenNode = event.target.closest('.task');
  parenNode.remove();
  let tasksAll = document.querySelectorAll(".task");
  if (tasksAll.length === 0) {
    emptyList.hidden = false;
  }
}


function doneTask(event) {
  if (event.target.dataset.action !== 'done') return;

  let parenNode = event.target.closest('.task');
  let textTask = parenNode.querySelector('#text-value');
  textTask.classList.toggle('done-task');

}
