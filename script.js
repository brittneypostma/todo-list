let stored = JSON.parse(window.localStorage.getItem("todos"));
let todos = stored ? stored : []

const date = document.querySelector("#date")
const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
const months = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const today = new Date()
date.innerHTML = `${days[today.getDay()]}, ${months[today.getMonth()]} ${today.getDate()}`

const add = document.querySelector("#add")
const clear = document.querySelector("#clear")
const list = document.querySelector("#todo-list")

const item = document.querySelector("#item")
const itemCount = document.querySelector("#item-count")
itemCount.innerHTML = todos.length


const remove = (id) => {
  const idx = todos.findIndex(todo => todo.id === id);
  todos.splice(idx, 1);
  let updTodos = [...todos];
  localStorage.setItem("todos", JSON.stringify(updTodos));
  todos = updTodos;
  return todos
}

const toggleComplete = (id) => {
  const idx = todos.findIndex(todo => todo.id === id);
  todos[idx].done = !todos.done
}

const newItem = () => {
  todos.forEach(todo => {
    const check = 'fa-check-circle'
    const uncheck = 'fa-circle-thin'
    const line = 'lineThrough'
    const done = todo.done ? check : uncheck
    const strike = todo.done ? line : ""
    list.insertAdjacentHTML('beforeend', `
    <li class="todo-item" data-key="${todo.id}">
      <i class="co fa ${done}" job="complete"></i>
      <p class="text ${strike}">${todo.name}</p>
      <i onclick="remove(${todo.id})" class="de fa fa-trash-o" job="delete"></i>
    </li>`)
  })
}

const addTodo = () => {
  const newTodo = {
    name: item.value,
    id: Math.random()
      .toString(36)
      .substr(2, 9),
    done: false
  }
  let updTodos = [...todos, newTodo]
  localStorage.setItem("todos", JSON.stringify(updTodos))
  todos = updTodos
  newItem()
  item.value = ''
}

const complete = () => {
  confirm("Are you sure you want to delete your todos?")
  todos = todos.filter(todo => !todo.done);
}

document.addEventListener("keyup", e => {
  if (e.keyCode === 13) {
    if (item.value) {
      addTodo()
    } else item.focus
  }
})

list.addEventListener('click', function (e) {
  if (e.target.tagName === "LI") {

    e.target.classList.toggle('lineThrough')
  }
})