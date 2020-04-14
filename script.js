getDay()
// loadEvents();

// function loadEvents() {
//   document.querySelector('#add').addEventListener('click', submit);
//   document.querySelector('ul').addEventListener('click', deleteOrTick);

// }

function getDay() {
  const date = document.querySelector("#date")
  const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
  const months = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const today = new Date()
  date.innerHTML = `${days[today.getDay()]}, ${months[today.getMonth()]} ${today.getDate()}`
}

let stored = JSON.parse(window.localStorage.getItem("todos"));
let todos = stored ? stored : []

var list = document.getElementsByTagName("LI");
var i;
for (i = 0; i < list.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  list[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


// const add = document.querySelector("#add")
// const clear = document.querySelector("#clear")
// const list = document.querySelector("#todo-list")

// const item = document.querySelector("#item")
// const itemCount = document.querySelector("#item-count")
// itemCount.innerHTML = todos.length

// const toggleComplete = (id) => {
//   const idx = todos.findIndex(todo => todo.id === id);
//   todos[idx].done = !todos.done
// }

// const showTodos = () => {
//   todos.forEach(todo => {
//     list.insertAdjacentHTML('beforeend', `
//     <li class="todo-item" data-key="${todo.id}">
//       <p class="text">${todo.name}</p>
//       <i id="${todo.id}" class="de fa fa-trash-o" job="delete"></i>
//     </li>`)
//   })
// }

// const addTodo = () => {
//   const newTodo = {
//     name: item.value,
//     id: Math.random()
//       .toString(36)
//       .substr(2, 9),
//     done: false
//   }
//   let updTodos = [...todos, newTodo]
//   localStorage.setItem("todos", JSON.stringify(updTodos))
//   todos = updTodos
//   showTodos()
//   item.value = ''
// }

// const complete = () => {
//   confirm("Are you sure you want to delete your todos?")
//   todos = todos.filter(todo => !todo.done);
// }

// document.addEventListener("keyup", e => {
//   if (e.keyCode === 13) {
//     if (item.value) {
//       addTodo()
//     } else item.focus
//   }
// })

// list.addEventListener('click', function (e) {
//   if (e.target.tagName === "P") {
//     e.target.classList.toggle('lineThrough')
//   }
// })

// list.addEventListener('click', function (e) {
//   if (e.target.tagName === "I") {
//     const id = e.target.id
//     const idx = todos.findIndex(todo => todo.id === id);
//     let updTodos = [...todos]
//     updTodos.splice(idx, 1);
//     localStorage.setItem("todos", JSON.stringify(updTodos));
//     todos = updTodos
//     return todos
//   }
// })