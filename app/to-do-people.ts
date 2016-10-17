/// <reference path="to-do-classes-interfaces.ts" />
module ToDoList {
  var aimen: ToDoList.IPerson = {
    name: "Aimen K",
    email: "aimen.khakwani@hotmail.com"
  }
  
  var molly: ToDoList.IPerson = {
    name: "Molly L",
    email: "mollyklecompte@gmail.com"
  }

  var tom: ToDoList.IPerson = {
    name: "Tom Underling",
    email: "tom_underling_intro_student@epicodus.com"
  }

  export var people = {
    "aimen": aimen,
    "molly": molly,
    "tom": tom
  };
}
