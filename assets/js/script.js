// Unlike console.log, which displays the element's HTML, console.dir() displays the HTML element as an object, known as a DOM element. And because it is an object, that means we can access its properties and methods using dot notation. In fact, the document object allows us to access everything on the webpage.
console.dir(window.document);

// button
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// create list item
var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};

buttonEl.addEventListener("click", createTaskHandler);

