import React, { useState, useEffect } from 'react';
import Item from '../item'

import { getItems } from '../actions/items'

import { useDispatch, useSelector } from 'react-redux'

function ItemList() {

    const items = useSelector(state => state.items || [])
    const dispatch = useDispatch();

    useEffect(() => {
        // via redux middleware action will be dispatched
        dispatch(getItems())
    }, [])


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