
import * as itemsApi from '../api/items'

export function getItems() {
    return function (dispatch) {
        itemsApi.getItems()
            .then(items => {
                const action = { type: 'LOAD_ITEMS', items }
                dispatch(action)
            })
    }
}


export function getReviews(itemId) {
    return function (dispatch) {
        itemsApi.getReviews(itemId)
            .then(reviews => {
                const action = { type: 'LOAD_REVIEWS', reviews, itemId }
                dispatch(action)
            })
    }
}