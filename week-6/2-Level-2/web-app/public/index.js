
const todosBtn = document.getElementById("todos-btn")
todosBtn.addEventListener('click', e => {


    // Async Http request

    fetch("/todos")
        .then(response => response.json())
        .then(todos => {
            console.log(todos)
        })


})