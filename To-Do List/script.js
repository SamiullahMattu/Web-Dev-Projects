document.getElementById("addButton").addEventListener("click", function(){
    if (document.getElementById("todoInput").value === "") {
        alert("Please enter a todo item.");
        return; // Exit the function if input is empty
    }

    let input = document.getElementById("todoInput");
    let todoList = document.getElementById("todoList");
    let newTodo = document.createElement("li");
    newTodo.textContent = input.value;
    todoList.appendChild(newTodo);
    input.value = ""; // Clear the input field after adding the todo
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x"; 
        newTodo.appendChild(deleteBtn);
    deleteBtn.classList.add("delete-btn");
   saveData(); // Save the updated list to localStorage
console.log(input.value);})

document.getElementById("todoList").addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove(); // Remove the li
           saveData(); // Save the updated list to localStorage
        return;
     
    }
     if (event.target.tagName === "LI" && event.target.style.textDecoration === "line-through") {
        event.target.style.textDecoration = "none";
        event.target.style.color = "black";
       saveData(); // Save the updated list to localStorage
        // event.target.syle. = "black";
    }
   else if (event.target.tagName === "LI" && event.target.style.textDecoration !== "line-through") {
        event.target.style.textDecoration = "line-through";
        event.target.style.color = "red";
          if (event.target.classList.contains("delete-btn")){
            document.getElementsByClassName("deleteBtn").style.textDecoration = "none";
          }
          saveData(); // Save the updated list to localStorage
    }

})
function saveData(){
    localStorage.setItem("data", document.getElementById("todoList").innerHTML);
}
function loadData() {
    let data = localStorage.getItem("data");
    if (data) {
        document.getElementById("todoList").innerHTML = data;
    }
}
loadData();
