
// State Change Logic
const profileReducer = (state, action) => {
    console.log("use reducer");
    let { type, value } = action
    switch (type) {
        case 'CHANGE_NAME': {
            return { ...state, name: value }
        }
        case 'CHANGE_AGE': {
            return { ...state, age: value }
        }
        case 'CHANGE_ADDRESS': {
            return { ...state, address: value }
        }
        default:
            return state
    }
}

export { profileReducer }