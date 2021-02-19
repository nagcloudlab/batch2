

import React, { useState, useContext } from 'react';
import TodoAppContext from '../TodoAppContext';

function TodoInput({ }) {
    const [title, setTitle] = useState('')
    const dispatch = useContext(TodoAppContext)

    const handleOnKeyUp = e => {
        if (e.which !== 13) {
            let title = e.target.value
            setTitle(title)
        } else {
            dispatch({ type: 'ADD_TODO', title })
            e.target.value = ""
        }
    }
    return (
        <div>
            <input onKeyUp={handleOnKeyUp} className="form-control" placeholder="What needs to be done?" />
        </div>
    );
}

export default TodoInput;