getDay()
loadEvents();

const name = document.getElementById('name')
name.value = JSON.parse(localStorage.getItem("name")) || 'Your name here!'
name.style.width = '15ch'

function getDay() {
  const date = document.querySelector("#date")
  const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
  const months = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const today = new Date()
  date.innerHTML = `${days[today.getDay()]}, ${months[today.getMonth()]} ${today.getDate()}`
}

let stored = JSON.parse(window.localStorage.getItem("todos"));
let todos = stored ? stored : []
const list = document.querySelector("#todo-list")

function showTodos() {
  list.innerHTML = ''
  todos.forEach(todo => {
    const done = todo.done ? 'checked' : ''
    list.insertAdjacentHTML('beforeend', `
      <li class="todo-item ${done}" id="${todo.id}">
        ${todo.name}
        <i onclick="deleteTask('${todo.id}')" class="de fa fa-trash-o" job="delete"></i>
      </li>`)
  })
  document.querySelector("#item-count").innerHTML = todos.length
}

function addTodo() {
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
  showTodos()
  item.value = ''
}

function deleteTask(id) {
  const idx = todos.findIndex(todo => todo.id === id)
  todos.splice(idx, 1)
  localStorage.setItem("todos", JSON.stringify(todos))
  showTodos()
}


const complete = () => {
  confirm("Are you sure you want to delete your todos?")
  todos.forEach(todo => {
    if (todo.done) {
      todos = todos.filter(t => t.done === false)
      localStorage.setItem("todos", JSON.stringify(todos))
      showTodos()
      return todos
    }
  })
}

function loadEvents() {
  document.querySelector('#name').addEventListener('keyup', function handleName(e) {
    localStorage.setItem("name", JSON.stringify(name.value))
    name.style.width = name.value.length + "ch";
    if (name.value === '') {
      name.value = ' Your'
    }
    if (e.keyCode === 13) {
      name.blur()
    }
  })
  document.querySelector('#add').addEventListener('click', addTodo);
  document.querySelector('ul').addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
      let updTodos = [...todos]
      const idx = updTodos.findIndex(todo => todo.id === ev.target.id)
      updTodos[idx].done = !updTodos[idx].done
      localStorage.setItem("todos", JSON.stringify(updTodos))
      todos = updTodos
    }
  }, false);
  document.querySelector('#item').addEventListener('keyup', function (e) {
    if (e.target.value !== '' && e.keyCode === 13) {
      addTodo()
    } else document.querySelector('#item').focus()
  })
}