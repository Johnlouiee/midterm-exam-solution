
let tasks = [];

// Add a new task
function addTask(id, name, description) {
  tasks.push({ id, name, description });
  console.log("Task added:", { id, name, description });
}

// View all tasks
function viewTasks() {
  console.log("Tasks:", tasks);
}

// Update a task by id
function updateTask(id, newName, newDescription) {
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.name = newName;
    task.description = newDescription;
    console.log("Task updated:", task);
  } else {
    console.log("Task not found.");
  }
}

// Delete a task by id
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  console.log(`Task with ID ${id} deleted.`);
}

// Example usage
addTask(1, "Learn JavaScript", "Practice basic concepts.");
addTask(2, "Build a project", "Create a CRUD system.");
viewTasks();
updateTask(1, "Learn JavaScript", "Master asynchronous programming.");
viewTasks();
deleteTask(2);
viewTasks();
