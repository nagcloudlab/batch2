
/*

    - addTodo(title)
    - editTodo(id,newTitle)
    - completeTodo(id) : toggle
    - deleteTodo(id)
    - clearCompleted()
    - completeAll() : toggle
    - viewTodos(flag)
        flag : All,Active,Completed

    //----------------------------------------------------------------

    //  todo = {id,title,completed}

    id : number
    title : string
    completed : boolean

    //----------------------------------------------------------------

    // Apply following

    => Naming conventions
    => code organization
    => functional programming principles
    => choose best data structure to manage data

    //----------------------------------------------------------------

*/

//----------------------------------------------------------------
// define data model
//----------------------------------------------------------------

class Todo {
    static nextId = 0;
    constructor(title) {
        this.id = ++Todo.nextId;
        this.title = title;
        this.completed = false;
    }
}

//----------------------------------------------------------------

let todos = []


const flags = {
    ALL: () => true,
    ACTIVE: todo => !todo.completed,
    COMPLETED: todo => todo.completed
}

const todosService = {
    addTodo(title) {
        const todo = new Todo(title)
        todos = todos.concat(todo);
    },
    editTodo(id, newTitle) {
        todos = todos.map(todo => todo.id === id ? { ...todo, title: newTitle } : todo)
    },
    completeTodo(id) {
        todos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    },
    deleteTodo(id) {
        todos = todos.filter(todo => todo.id !== id)
    },
    clearCompleted() {
        todos = todos.filter(todo => !todo.completed)
    },
    completeAll() {
        const areAllCompleted = todos.every(todo => todo.completed)
        todos = todos.map(todo => ({ ...todo, completed: !areAllCompleted }))
    },
    viewTodos(flag) {
        todos
            .filter(flags[flag])
            .forEach(todo => console.log(todo)); // console UI
    }
}

//----------------------------------------------------------------

todosService.addTodo('todo-1')
todosService.addTodo('todo-2')
todosService.addTodo('todo-3')

todosService.viewTodos('ALL')

//----------------------------------------------------------------