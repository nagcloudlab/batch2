import React, { useState } from 'react';
import Item from '../item'

function ItemList(props) {


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
            return (
                <div key={itemData.id} className="list-group-item">
                    <Item value={itemData} />
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