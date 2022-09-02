// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = (title, description) => {
  // 1. add a task description
  // 2. the arrays suck, so let's make it into an object
  // 3. turn the functions into object methods
  const task = {
    title,
    description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    completeTask: function() {
      this.complete = true;
    },
  };
  return task;
}

// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];
// Let's see our tasks
task1.logState();
task1.completeTask();
task1.logState();

console.log(tasks);
