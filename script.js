function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    var li = document.createElement("li");
    li.innerHTML = '<span class="taskText">' + taskInput.value + "</span>";
    li.innerHTML += '<span class="edit" onclick="editTask(this)">✎</span>';
    li.innerHTML += '<span class="delete" onclick="deleteTask(this)">❌</span>';
    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}

function deleteTask(task) {
  task.parentNode.remove();
}

function editTask(task) {
  var listItem = task.parentNode;
  var taskText = listItem.querySelector(".taskText");
  var newText = prompt("Edit task:", taskText.textContent);

  if (newText !== null && newText.trim() !== "") {
    taskText.textContent = newText;
  }
}
