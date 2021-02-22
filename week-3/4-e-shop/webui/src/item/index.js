
import React, { useState } from 'react';
import classNames from 'classnames';


function Item({ value: item }) {

    const [tab, setTab] = useState(1)
    const [reviews, setReviews] = useState([
        { stars: 5, body: 'sample-review-1', author: 'who1@mail.com' },
        { stars: 1, body: 'sample-review-2', author: 'who2@mail.com' }
    ])

    const renderCanBuyBtn = canBuy => {
        if (canBuy)
            return (<button className="btn btn-dark btn-sm mb-2">Buy</button>)
        else return null;
    }

    const handleTabChange = tabIndex => {
        setTab(tabIndex)
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
                return (<div>None Yet</div>)
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
                    <div>{item.price}</div>
                    {renderCanBuyBtn(item.can_buy)}
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a onClick={e => handleTabChange(1)} className={classNames({ 'nav-link': true, 'active': tab === 1 })} href="#">description</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={e => handleTabChange(2)} className={classNames({ 'nav-link': true, 'active': tab === 2 })} href="#">specification</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={e => handleTabChange(3)} className={classNames({ 'nav-link': true, 'active': tab === 3 })} href="#">reviews</a>
                        </li>
                    </ul>
                    {renderTabPanel()}
                </div>
            </div>
        </div>
    );
}

export default Item;