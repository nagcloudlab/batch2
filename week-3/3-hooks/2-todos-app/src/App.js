import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TodoInput from './todo-input'
import TodoList from './todo-list'
import TodoAppContext from './TodoAppContext';
import { todosReducer } from './reducers/todos'

const intialTodos = [
  { id: 1, title: 'todo-1', completed: true },
  { id: 2, title: 'todo-2', completed: false }
]

function App() {
  const [todos, dispatch] = useReducer(todosReducer, intialTodos)
  return (
    <div className="container">
      <hr />
      <h1>Todo App</h1>
      <hr />

      <TodoAppContext.Provider value={dispatch}>
        <TodoInput />
        <hr />
        <TodoList value={todos} />
      </TodoAppContext.Provider>

    </div >
  );
}

export default App;
