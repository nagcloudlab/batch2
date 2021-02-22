import React from 'react';

function CartView({ cart }) {
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
                    <td>{qty}</td>
                    <td>&#8377;{item.price * qty}</td>
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