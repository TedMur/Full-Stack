var todos = ["buy stuff", "drive a car"];
var input = prompt("what would you like to do?")

while(input !== "quit"){
    if(input === "list"){
        listTodos();
    } else if(input === "new"){
        var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
    } else if (input === "delete"){
        var index = prompt("Enter index of todo to delete?")
        todos.splice(index, 1);
    }
    var input = prompt("what would you like to do?");
}
console.log("Okay, Bye");

function listTodos(){
    console.log("********************")
        todos.forEach(function(todo, i) {
            console.log(i + ": " + todo);
        });
        console.log("********************")
}