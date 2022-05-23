// Unlike console.log, which displays the element's HTML, console.dir() displays the HTML element as an object, known as a DOM element. And because it is an object, that means we can access its properties and methods using dot notation. In fact, the document object allows us to access everything on the webpage.
console.dir(window.document);

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function (event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // package up data as an object
    var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };

  // check if values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
  };

    formEl.reset();

  // send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
};

var createTaskEl = function(taskDataObj) {
  // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

  // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", taskFormHandler);






// broken

// var formEl = document.querySelector("task-form");
// var tasksToDoEl = document.querySelector("#tasks-to-do");

// // create list item
// var createTaskHandler = function (event) {
//     event.preventDefault();

//     var taskNameInput = document.querySelector("input[name='task-name']").value;
//     var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
//     // create list item
//     var listItemEl = document.createElement("li");
//     listItemEl.className = "task-item";

//     // create div to hold task info and add list item
//     var taskInfoEl = document.createElement("div");
//     taskInfoEl.className = "task-info";

//     // add HTML content to div
//     taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    
//     listItemEl.appendChild(taskInfoEl);

//     // add entire list item to list
//     tasksToDoEl.appendChild(listItemEl);
// };

// formEl.addEventListener("submit", createTaskHandler);

