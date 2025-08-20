const input = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const addBtn = document.getElementById("addButton");

addBtn.addEventListener("click", function () {
  if (input.value.trim() === "") {
    alert("Please enter a todo item.");
    return;
  }

  createTodo(input.value);
  input.value = "";
  saveData();
});

function createTodo(text) {
  let newTodo = document.createElement("li");

  // span for text
  let span = document.createElement("span");
  span.textContent = text;
  newTodo.appendChild(span);

  // edit button
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");
  editBtn.addEventListener("click", function () {
    let newText = prompt("Edit your todo item:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText;  // only change the span text
      saveData();
    }
  });
  newTodo.appendChild(editBtn);

  // delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function () {
    newTodo.remove();
    saveData();
  });
  newTodo.appendChild(deleteBtn);

  // mark complete
  span.addEventListener("click", function () {
    if (span.style.textDecoration === "line-through") {
      span.style.textDecoration = "none";
      span.style.color = "black";
    } else {
      span.style.textDecoration = "line-through";
      span.style.color = "red";
    }
    saveData();
  });

  todoList.appendChild(newTodo);
}

function saveData() {
  localStorage.setItem("data", todoList.innerHTML);
}

function loadData() {
  let data = localStorage.getItem("data");
  if (data) {
    todoList.innerHTML = data;

    // re-bind events after loading
    todoList.querySelectorAll("li").forEach((li) => {
      const span = li.querySelector("span");
      const editBtn = li.querySelector(".edit-btn");
      const deleteBtn = li.querySelector(".delete-btn");

      span.addEventListener("click", function () {
        span.style.textDecoration =
          span.style.textDecoration === "line-through" ? "none" : "line-through";
        span.style.color = span.style.color === "red" ? "black" : "red";
        saveData();
      });

      editBtn.addEventListener("click", function () {
        let newText = prompt("Edit your todo item:", span.textContent);
        if (newText !== null && newText.trim() !== "") {
          span.textContent = newText;
          saveData();
        }
      });

      deleteBtn.addEventListener("click", function () {
        li.remove();
        saveData();
      });
    });
  }
}

loadData();
