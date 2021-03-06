//TODO: Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//TODO: Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

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

  //* Add Todo to Local Storage
  saveLocalTodos(todoInput.value);

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
    deleteLocalTodo(todo);
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

  //TODO: Iterate over each todo and display it or not
  todos.forEach(function (todo) {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTodos(todo) {
  let todos;

  //TODO: Check if there isn't already somethings in the todos
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  //TODO: Add the Todo to the Todos list and save it
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;

  //TODO: Check if there isn't already somethings in the todos
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  //TODO: Iterate over each todo and build the list of todos
  todos.forEach(function (todo) {
    //* Create Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //* Create Li
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
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
  });
}

function deleteLocalTodo(todo) {
  let todos;

  //TODO: Check if there isn't already somethings in the todos
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  //TODO: Remove the Todo from the Todos list and save it
  const todoIndex = todos.indexOf(todo.children[0].innerText);
  todos.splice(todoIndex, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
