// document.getElementById("taskAdd").onclick = function() {
//     var newTask = document.getElementById("taskValue");
//     newTask = newTask.value;
//
//     var todoList = document.getElementById("todoList");
//     todoList = todoList.innerHTML
//
//     document.getElementById("todoList").innerHTML = todoList + '<li id="todoItem" class="todo-item"> <p>' + newTask + '</p>  <i class="fas fa-trash-alt"></i> <i class="fas fa-check"></i> </li>';
// };

var trashSVG = '<i class="fas fa-trash-alt"></i>';
var checkSVG = '<i class="fas fa-check"></i>';
var newTask = document.getElementById("taskValue");
newTask = newTask.value;

document.getElementById('taskAdd').addEventListener(onclick, addNewTodo());

function addNewTodo() {
  var item = document.createElement('li');
  item.classList.add('todo-item');
  item.innertext = newTask;
}
