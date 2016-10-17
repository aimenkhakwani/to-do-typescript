/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />

var people = ToDoList.people;

var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "High", people.tom));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "High", people.tom));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "Low", people.tom));
tasks[0].markDone();

tasks.push(new ToDoList.HobbyTask("Practice origami."));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));

var today = new Date();
var tomorrow = today;
tomorrow.setDate(today.getDate() + 1);
var nextDay = today;
nextDay.setDate(today.getDate() + 2);

tasks.push(new ToDoList.WorkTask(today, "Update blog.", "High", people.aimen));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.molly));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.tom));
tasks.push(new ToDoList.WorkTask(today, "Grab lattes.", "High", people.tom));
tasks.push(new ToDoList.WorkTask(tomorrow, "Clean up Molly and Aimen's Githubs", "Medium", people.tom));
tasks.push(new ToDoList.WorkTask(nextDay, "Perfect Molly and Aimen's LinkedIn profiles", "Low", people.tom));

console.log(tasks);
var tomTasks = ToDoList.describeTasksForPerson(people.tom, tasks);
console.log("Here are all of the things our lovely Underling Tom must do to appease us: ");
for(var task of tomTasks) {
  console.log(task);
}
