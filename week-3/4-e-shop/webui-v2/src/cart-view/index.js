import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { qtyChange, deleteCartLine } from '../actions/cart'

function CartView() {

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleQty = (value, itemId) => {
        dispatch(qtyChange(itemId, value))
    }
    const handleDelete = itemId => {
        dispatch(deleteCartLine(itemId))
    }

    const renderCartLines = () => {
        const keys = Object.keys(cart)
        return keys.map((key, idx) => {
            const cartLine = cart[key]
            const { item, qty } = cartLine
            return (
                <tr key={key}>
                    <td>{idx + 1}</td>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td>
                        <i onClick={e => handleQty(-1, item.id)} style={{ cursor: 'pointer' }} className="fa fa-minus mr-3"></i>
                        {qty}
                        <i onClick={e => handleQty(1, item.id)} style={{ cursor: 'pointer' }} className="fa fa-plus ml-3"></i>
                    </td>
                    <td>&#8377;{item.price * qty}</td>
                    <td><i onClick={e => handleDelete(item.id)} style={{ cursor: 'pointer' }} className="fa fa-trash"></i></td>
                </tr>
            )
        })
    }
    return (
        <div className="card">
            <div className="card-header">Item(s) in cart</div>
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCartLines()}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CartView;