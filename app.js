//TODO: Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo)");

//TODO: Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//TODO: Functions
function addTodo(event) {
  //! Prevent form from submiting
  event.preventDefault();

  //* Create Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //* Create Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //* Create Check Mark Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("completed-btn");
  todoDiv.appendChild(completedButton);

  //* Create Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //* Append to List
  todoList.appendChild(todoDiv);

  //* Clear Todo Input Value
  todoInput.value = "";
}

function deleteCheck(event) {
  const item = event.target;

  //TODO: Delete
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //* Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  //TODO: Check
  if (item.classList[0] === "completed-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(event) {
    const todos = todoList.childNodes;
}