import React, { useState } from 'react';
import Item from '../item'

function ItemList({ onBuy, cart }) {

    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Laptop',
            price: 145000,
            description: 'New mac pro',
            can_buy: true,
            image_path: 'images/Laptop.png',
        },
        {
            id: 2,
            name: 'Mobile',
            price: 39000,
            description: 'New pro',
            can_buy: true,
            image_path: 'images/Mobile.png',
        }
    ])


    const renderItems = () => {
        return items.map(itemData => {
            let cartLine = cart[itemData.id] || {}
            let cartItemQty = cartLine.qty || 0
            return (
                <div key={itemData.id} className="list-group-item">
                    <Item value={itemData} cartItemQty={cartItemQty} onBuy={onBuy} />
                </div>
            )
        })
    }


    return (
        <div>
            {renderItems()}
        </div>
    );
}

export default ItemList;