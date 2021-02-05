import axios from 'axios';

// Type
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

function loadTodo(id) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
    axios.get(url).then(response => {
        const todo = response.data as Todo
        const id = todo.id;
        const title = todo.title;
        const completed = todo.completed;
        logTodo(id, title, completed)
    })
}

function logTodo(id: number, title: string, completed: boolean) {
    console.log(`
        Id : ${id},
        Title : ${title},
        Completed : ${completed}
    `)
}

loadTodo(1)

