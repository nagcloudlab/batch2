


interface Todo {
    readonly id: number,
    title: string,
    completed: boolean
}

interface TodoService {
    addTodo: (title: string) => void,
}

const todo: Todo = { id: 1, title: 'todo-1', completed: false }
// todo.id = 10;



const service = {
    addTodo(title: string) {
        //..
    }
}

const todoService: TodoService = service;


//----------------------------------------------------------------





interface Wheel {
    rotate: () => void
}



class MRFWheel implements Wheel {
    rotate() {
        console.log("MRF wheel rotating..");
    }
}


const wheel: Wheel = new MRFWheel()