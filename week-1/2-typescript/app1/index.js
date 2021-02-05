"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
function loadTodo(id) {
    var url = "https://jsonplaceholder.typicode.com/todos/" + id;
    axios_1["default"].get(url).then(function (response) {
        var todo = response.data;
        console.log(todo);
    });
}
loadTodo(1);
