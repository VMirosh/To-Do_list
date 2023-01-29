//Находим элементы на странице
let createForm = document.querySelector('.form');
let taskInput = document.querySelector('#task-input');
let addButton = document.querySelector('#add-task-btn')
let showTask = document.querySelector(".show-tasks");
let templateTask = document.querySelector(".template-task");
let emptyList = document.querySelector(".empty-list");


// Добавляем новую задачу
createForm.addEventListener('click', addTask);
function addTask(event) {
  if (event.target.localName == "button") {
   
    if (!emptyList.hidden) {
      emptyList.hidden = true;
    }
    let newTask = createTask(taskInput.value);
    showTask.prepend(newTask);
    // Очистить окно
    taskInput.value = "";
    taskInput.focus();

  }
}
//Создаем новую задачу 
function createTask(text) {
  let div = templateTask.content.cloneNode(true);
  let textValue = div.querySelector("#text-value");
  textValue.append(text);
  return div;
}
 // Delete task
showTask.addEventListener('click', deleteTask);
function deleteTask(event) {
  
  if (event.target.dataset.action === 'delete') {

    let parenNode = event.target.closest('.task');
    parenNode.remove();
  }

  let tasksAll = document.querySelectorAll(".task");
  if (tasksAll.length === 0) {
    emptyList.hidden = false;
  }
}
// Done task
showTask.addEventListener('click',doneTask);
debugger
 function doneTask(event){
  if(event.target.dataset.action === 'done'){
    let parenNode = event.target.closest('.task');
    let textTask = parenNode.querySelector('#text-value');
    textTask.classList.toggle('done-task');
  }
 }
