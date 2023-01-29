//Находим элементы на странице
let createForm = document.querySelector('.form');
let taskInput = document.querySelector('#task-input');
let addButton = document.querySelector('#add-task-btn')
let showTask = document.querySelector(".shower-task");
let templateTask = document.querySelector(".template-task");

createForm.addEventListener('click',function(event){
  if(event.target.localName == "button" ) {
     debugger;
        let newTask = createTask(taskInput.value);
       showTask.append(newTask);


    }
});
 function createTask(text){
  let div = templateTask.content.cloneNode(true);
   let textValue = div.querySelector("#text-value");

 textValue.append(text);

  return div;

  
 

 }
