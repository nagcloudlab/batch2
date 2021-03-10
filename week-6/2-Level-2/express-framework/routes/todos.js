

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')



let todos = [
    {
        id: 1,
        title: 'todo-1',
        completed: false,
        type: 'O'
    },
    {
        id: 2,
        title: 'todo-2',
        completed: false,
        type: 'O'
    },
    {
        id: 3,
        title: 'todo-3',
        completed: false,
        type: 'P'
    }
]


router.route("/")
    .get((req, res, next) => {
        const cat = req.query.cat
        let result = []
        if (cat)
            result = todos.filter(todo => todo.type === cat)
        else
            result = todos
        // res.json(result)

        res.render('todos', { todos })

    })
    .post(bodyParser.urlencoded(true), (req, res, next) => {
        const newTodo = req.body
        newTodo.id = todos.length + 1
        newTodo.completed = false;
        todos.push(newTodo)
        res.status(201).json("New todo created..")
    })


router.param("todoId", (req, res, next) => {
    const todoId = req.params.todoId
    req.todoId = Number.parseInt(todoId);
    next()
})

router.route("/:todoId")
    .delete((req, res, next) => {
        todos = todos.filter(todo => todo.id !== req.todoId)
        res.status(200).json("todo deleted")
    })
    .get((req, res, next) => {
        // const todoId = req.params.todoId
        const todo = todos.find(todo => todo.id === req.todoId)
        if (todo)
            res.json(todo)
        else
            res.status(404).json("requested todo doest not exist")
    })
    .put((req, res, next) => {
        const todo = todos.find(todo => todo.id === req.todoId)
        //... 
        res.json(todo)
    })




module.exports = router;