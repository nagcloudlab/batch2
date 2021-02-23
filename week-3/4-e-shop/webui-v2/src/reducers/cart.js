
export function cartReducer(state = {}, action) {

    let { type } = action;

    switch (type) {
        case 'BUY': {
            let { item } = action
            let { id } = item
            let cartLine = state[id]
            if (cartLine) {
                cartLine = { ...cartLine, qty: cartLine.qty + 1 }
            } else {
                cartLine = { item, qty: 1 }
            }
            return { ...state, [id]: cartLine }
        }
        case 'CART_ITEM_QTY_CHANGE': {
            let { itemId: id, value } = action
            let cartLine = state[id]
            cartLine.qty += value
            if (cartLine.qty === 0)
                cartLine.qty = 1
            return { ...state, [id]: cartLine }
        }
        case 'DELETE_CART_LINE': {
            let { itemId: id } = action
            delete state[id];
            return { ...state }
        }
        default:
            return state;
    }


}