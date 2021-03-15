const express = require('express');
const bodyParser = require('body-parser');
const app = express()

var mysql = require('mysql2');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'mysql'
});

// connection.connect();
// connection.query('create table todos(id int primary key,title varchar(100),completed boolean)', function (error, results, fields) {
//     if (error) throw error;
//     console.log(results)
// });
// connection.end();


app.post("/todos", bodyParser.json(), (req, res) => {
    // 
    const body = req.body;
    const newTodo = {
        id: body.id,
        title: body.title,
        completed: false
    }
    connection.execute("insert into todos(id,title,completed) values(?,?,?)", [newTodo.id, newTodo.title, newTodo.completed], (err, results, fields) => {
        if (err) throw err;
        res.json(results)
    })

})

app.get("/todos", (req, res) => {
    // 
    connection.execute("select * from todos", (err, results, fields) => {
        if (err) throw err;
        res.json(results)
    })

})





app.listen(3000, () => {
    console.log("server up")
})
