

const todos = [
    "todo-1",
    "todo-2",
    "todo-3"
]

function renderTodos(func) {
    todos.forEach(func)
}

module.exports = {
    renderTodos
}