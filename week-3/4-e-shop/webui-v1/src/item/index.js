import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Review from '../review';

import axios from 'axios';

function Item({ value: item, onBuy, cartItemQty }) {

    const [tab, setTab] = useState(1)
    const [reviews, setReviews] = useState([])

    const fetchReviews = async () => {
        const apiUrl = `http://localhost:8080/api/items/${item.id}/reviews`
        const response = await axios.get(apiUrl)
        const reviews = await response.data;
        setReviews(reviews)
    }

    useEffect(() => {
        if (tab === 3) {
            fetchReviews()
        }
    }, [tab])

    const handleBuyBtnClick = () => {
        onBuy(item)
    }

    const renderCanBuyBtn = canBuy => {
        if (canBuy)
            return (<button onClick={e => handleBuyBtnClick()} className="btn btn-dark btn-sm mb-2">Buy</button>)
        else return null;
    }

    const handleTabChange = tabIndex => {
        setTab(tabIndex)
    }

    const renderReviews = () => {
        if (reviews.length === 0)
            return (<div>No Reviews</div>)
        return reviews.map((reviewData, idx) => {
            return <Review key={idx} value={reviewData} />
        })
    }

    const renderTabPanel = () => {
        switch (tab) {
            case 1: {
                return (<div>{item.description}</div>)
            }
            case 2: {
                return (<div>Not Yet</div>)
            }
            case 3: {
                return (<div>{renderReviews()}</div>)
            }
            default: return null;
        }
    }
    return (
        <div>
            <div className="row">
                <div className="col-4">
                    <img alt={item.name} src={item.image_path} className="img-fluid" />
                </div>
                <div className="col-8">
                    <div>{item.name}</div>
                    <div className="mb-2">&#8377;{item.price}</div>
                    {renderCanBuyBtn(item.can_buy)}
                    &mdash;
                    <span>{cartItemQty}</span>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a onClick={e => handleTabChange(1)} className={classNames({ 'nav-link': true, 'active': tab === 1 })} href="#">Description</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={e => handleTabChange(2)} className={classNames({ 'nav-link': true, 'active': tab === 2 })} href="#">Specification</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={e => handleTabChange(3)} className={classNames({ 'nav-link': true, 'active': tab === 3 })} href="#">Reviews</a>
                        </li>
                    </ul>
                    {renderTabPanel()}
                </div>
            </div>
        </div>
    );
}

export default Item;