var todos = [];
window.setTimeout(function(){
  var input = prompt("What would you like to do?");

  while(input !== "quit"){
    // Handle input
    if (input === "list") {
      // listTodos();
      decoration(listTodos);
    } 
    // Ask for new todo
    else if (input === "new") {
      // newTodo();
      decoration(newTodo);
    }
    // Delete todo.
    else if (input === "delete") {
      // deleteTodo();
      decoration(deleteTodo);
    }
    // Ask again for new input
    input = prompt("What would you like to do?");
  }
  decoration(quitTodo);

  function listTodos() {
    todos.forEach(function(todo, i){
      console.log(i + ": " + todo);
    });
  }

  function newTodo() {
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log(newTodo + " has been added to your list.");
  }

  function deleteTodo() {
    var indexDelete = prompt("Enter the index of the todo to delete.");
    console.log(todos.splice(indexDelete, 1) + " has been deleted.");
  }

  function quitTodo() {
    console.log("OK, you quit the app.");
  }

  function decoration(func) {
    console.clear();
    var decorator = "****************";
    console.log(decorator);
    func();
    console.log(decorator);
  }
}, 500);