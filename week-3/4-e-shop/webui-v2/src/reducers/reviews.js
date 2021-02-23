

export function reviewsReducer(state = {}, action) {

    let { type } = action;
    switch (type) {
        case 'LOAD_REVIEWS': {
            let { itemId: id, reviews } = action;
            let existingReviews = state[id] || []
            let newReviews = [...reviews, ...existingReviews]
            return { ...state, [id]: newReviews }
        }
        default: return state;
    }

}