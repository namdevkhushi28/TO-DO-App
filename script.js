let text = document.getElementById("text");
let button = document.getElementById("btn");
let todos = document.getElementById("lists");

function addTodo() {
  if (text.value == "") {
    alert("Enter your text");
  } else {
    let newElement = document.createElement("ul");
    newElement.innerHTML = ` ${text.value} <i class="fa-solid fa-trash"></i>`;
    todos.appendChild(newElement);
    text.value = "";

    function remove() {
      newElement.remove();
    }
    newElement.querySelector("i").addEventListener("click", remove);
  }
}
