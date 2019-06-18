var todos = ["Buy grocery"];
var input = prompt("what would you like to do?")

while(input !== "quit"){
    if(input === "list"){
        listTodos(); 
    } else if(input === "new"){
        addTodo();
    } else if(input === "delete"){
        var index = prompt("Enter index of an item to delete");
        todos.splice(index, 1);
    }
    var input = prompt("what would you like to do?")
}
console.log("Okay, Bye")

function listTodos(){
    console.log("**************");
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);}); 
    console.log("**************");
};
function addTodo(){
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
};
function deleteTodo(){
    var index = prompt("Enter index of an item to delete");
        todos.splice(index, 1);
};
