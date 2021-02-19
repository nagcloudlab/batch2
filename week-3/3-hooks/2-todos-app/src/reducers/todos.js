



function todosReducer(state, action) {
    const { type } = action;
    switch (type) {
        case 'ADD_TODO': {
            let { title } = action;
            let new_todo = { id: state.length + 1, title, completed: false }
            return [new_todo, ...state]
        }
        case 'COMPLETE_TODO': {
            let { id } = action;
            return state.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        }
        case 'DELETE_TODO': {
            let { id } = action;
            return state.filter(todo => todo.id !== id)
        }
        default:
            return state;
    }

}

export { todosReducer }