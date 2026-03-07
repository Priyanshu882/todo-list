const input = document.querySelector('.todoinput');
const addBtn = document.querySelector('.add-btn');


function addToDo(){
   const todoData = input.value;
   console.log(todoData);
}
   
addBtn.addEventListener('click', addToDo);