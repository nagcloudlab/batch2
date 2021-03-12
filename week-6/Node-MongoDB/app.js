const express = require('express');
const bodyParser = require('body-parser');
const app = express()

const MongoClient = require('mongodb').MongoClient;

// Connection URL
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'todos-db';

// Create a new MongoClient


app.post("/todos", bodyParser.json(), async (req, res) => {
    // 
    const client = new MongoClient(uri);
    const body = req.body;
    const newTodo = {
        id: body.id,
        title: body.title,
        completed: body.completed
    }

    try {
        // Connect the client to the server
        await client.connect();

        const database = client.db(dbName);
        const todosColln = database.collection("todos");
        const result = await todosColln.insertOne(newTodo)

        res.json(result)

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }


})

app.get("/todos", async (req, res) => {
    const client = new MongoClient(uri);
    try {
        // Connect the client to the server
        await client.connect();
        const database = client.db(dbName);
        const todosColln = database.collection("todos");
        const cursor = await todosColln.find({})
        const todos = []
        await cursor.forEach(todo => {
            todos.push(todo)
        })
        res.status(200).json(todos)

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }

})

app.listen(3000, () => {
    console.log("server up")
})
