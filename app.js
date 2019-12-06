//Define UI Variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners() {
  //Add task event
  form.addEventListener("submit", addTask);
  //Remove Task Event
  taskList.addEventListener("click", removeTask);
}

//Add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("add a Task");
  }

  //Create li element
  const li = document.createElement("li");
  //Add class
  li.className = "collection-item";
  //create textnode and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //Create new link
  const link = document.createElement("a");
  //Add Class
  link.className = "delete-item secondary-content";
  //Add html icon
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //Append link to li
  li.appendChild(link);

  //Append the li to ul
  taskList.appendChild(li);

  //Clear input
  taskInput.value = "";

  e.preventDefault();
}

//Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure you want to remove the item?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}
