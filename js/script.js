function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    var li = document.createElement("li");
    var ctrl = document.createElement("div");

    // Add classes to the control div
    ctrl.classList.add("ctrl");

    // Set innerHTML of the li element
    li.classList.add("tasks");
    li.innerHTML = '<span class="taskText">' + taskInput.value + "</span>";

    // Move the controls to the control div
    ctrl.innerHTML += '<span class="edit" onclick="editTask(this)">✎</span>';
    ctrl.innerHTML +=
      '<span class="delete" onclick="deleteTask(this)">❌</span>';
    ctrl.innerHTML +=
      '<input type="checkbox" onclick="toggleTaskStatus(this)">';

    // Append the control div to the list item
    li.appendChild(ctrl);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}

function deleteTask(task) {
  task.parentNode.parentNode.remove(); // Remove the parent of the parent, i.e., the li element
}

function editTask(task) {
  var listItem = task.parentNode.parentNode; // Get the parent of the parent, i.e., the li element
  var taskText = listItem.querySelector(".taskText");
  var newText = prompt("Edit task:", taskText.textContent);

  if (newText !== null && newText.trim() !== "") {
    taskText.textContent = newText;
  }
}

function toggleTaskStatus(checkbox) {
  var listItem = checkbox.parentNode.parentNode; // Get the parent of the parent, i.e., the li element
  var taskText = listItem.querySelector(".taskText");

  if (checkbox.checked) {
    listItem.classList.add("completed");
  } else {
    listItem.classList.remove("completed");
  }

  // Reorder completed tasks to the bottom
  var taskList = document.getElementById("taskList");
  var completedTasks = taskList.querySelectorAll(".completed");
  completedTasks.forEach((task) => taskList.appendChild(task));
}
