const input = document.querySelector(".todoinput");
const addBtn = document.querySelector(".add-btn");
const todoListMain = document.querySelector(".to-do-list-main");
const todoList = document.querySelector(".to-do-list-container");

function addToDo() {
  const todoData = input.value.trim();

  const existingError = document.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }

  if (todoData === "") {
      const inputContainer = document.querySelector('.add-to-do'); 
      const errorMessage = document.createElement('p');
      errorMessage.className = "error-message";
      errorMessage.textContent = 'Please enter a task! 😡';
      inputContainer.insertAdjacentElement('afterend', errorMessage);
      return;
  }

  const emptyList = document.querySelector(".emptyList");
  if (emptyList) {
    emptyList.remove();
  }

  // creating main container for todolist
  const toDoListContainer = document.createElement("div");
  toDoListContainer.classList.add("to-do-list-container");

  // creating firstdiv for content
  const toDoList = document.createElement("div");
  toDoList.classList.add("to-do-list");

  // maincontent of todo
  const toDoContent = document.createElement("p");
  toDoContent.textContent = todoData;
  toDoList.appendChild(toDoContent);

  // creating images for delete edit and done container
  const listImgContainer = document.createElement("div");
  listImgContainer.classList.add("list-img-container");

  // images
  const edit = document.createElement("img");
  edit.src = "images/edit.png";
  edit.alt = "edit-option";
  edit.className = "list-img edit";

  const done = document.createElement("img");
  done.src = "images/done.png";
  done.alt = "done-option";
  done.className = "list-img done";

  const deleteImg = document.createElement("img");
  deleteImg.src = "images/delete.png";
  deleteImg.alt = "delete-option";
  deleteImg.className = "list-img delete";
  listImgContainer.append(edit, done, deleteImg);
  toDoListContainer.append(toDoList, listImgContainer);
  todoListMain.appendChild(toDoListContainer);

  // Clear the input
  input.value = "";
  saveData();
}

function actions(e){
   if(e.target.classList.contains('delete')){
      e.target.closest('.to-do-list-container').remove();
      saveData();
   }
   else if(e.target.classList.contains('done')){
      const parent = e.target.closest('.to-do-list-container');
      parent.querySelector('p').classList.toggle('checked');
      saveData();
   }
   else if(e.target.classList.contains('edit')){
      const parent = e.target.closest('.to-do-list-container');
      const text = parent.querySelector('.to-do-list p');
      input.value = text.textContent;
      input.focus();
      parent.remove();
      saveData();
   }
}

function saveData(){
   localStorage.setItem('data', todoListMain.innerHTML);
}
function getData(){
   todoListMain.innerHTML = localStorage.getItem('data');
}

getData();
addBtn.addEventListener("click", addToDo);
todoListMain.addEventListener('click', actions);

