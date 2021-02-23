


export function buy(item) {
    return { type: "BUY", item }
}
export function qtyChange(itemId, value) {
    return { type: "CART_ITEM_QTY_CHANGE", itemId, value }
}
export function deleteCartLine(itemId) {
    return { type: "DELETE_CART_LINE", itemId }
}