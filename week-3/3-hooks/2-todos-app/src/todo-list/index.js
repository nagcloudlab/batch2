import React from 'react';
import TodoItem from '../todo-item'

function TodoList({ value: todos }) {
    const renderTodos = () => {
        return todos.map(todo => {
            return <TodoItem key={todo.id} value={todo} />
        })
    }
    return (
        <div className="card card-body">
            {renderTodos()}
        </div>
    );
}

export default TodoList;