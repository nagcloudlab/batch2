import React, { useContext } from 'react';
import TodoAppContext from '../TodoAppContext';
function TodoItem({ value: todo }) {
    const dispatch = useContext(TodoAppContext)
    const handleDelete = () => {
        let action = { type: 'DELETE_TODO', id: todo.id }
        dispatch(action)
    }
    const handleComplete = () => {
        let action = { type: 'COMPLETE_TODO', id: todo.id }
        dispatch(action)
    }
    return (
        <div className="list-group-item" style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: todo.completed ? '#DEF' : '#FFF' }}>
            <input onChange={e => handleComplete()} type="checkbox" checked={todo.completed} />
            <label>{todo.title}</label>
            <button onClick={handleDelete}>delete</button>
        </div>
    );
}

export default TodoItem;