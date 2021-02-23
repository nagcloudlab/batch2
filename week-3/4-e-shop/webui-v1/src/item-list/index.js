import React, { useState, useEffect } from 'react';
import Item from '../item'
import axios from 'axios';


function ItemList({ onBuy, cart }) {

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        try {
            const apiUrl = "http://localhost:8080/api/items"
            const response = await axios.get(apiUrl)
            const items = await response.data;
            setItems(items)
        } catch (e) {
            console.log();
        }
    }

    useEffect(() => {
        fetchItems();
    }, [])


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