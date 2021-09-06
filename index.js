// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
  };

  return task;
}

// marks the provided task as completed.
function completeTask(task) {
  task.complete = true;
}

// prints out the provided task's details.
function logTaskState(task) {
  console.log(
    `${task.title} has${task.complete ? "" : " not"} been completed.`
  );
}

// DRIVER CODE BELOW

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

logTaskState(task1);
completeTask(task1);
logTaskState(task1);

console.log("---");
console.log(tasks);
