import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import classNames from 'classnames';

function App() {

  const [products, setProducts] = useState([
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
  const [tab, setTab] = useState(1)

  const renderCanBuyBtn = canBuy => {
    if (canBuy)
      return (<button className="btn btn-dark btn-sm mb-2">Buy</button>)
    else return null;
  }

  const handleTabChange = tabIndex => {
    setTab(tabIndex)
  }

  const renderTabPanel = product => {
    switch (tab) {
      case 1: {
        return (<div>{product.description}</div>)
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

  const renderProducts = () => {
    return products.map(product => {
      return (
        <div key={product.id} className="list-group-item">
          <div className="row">
            <div className="col-4">
              <img alt={product.name} src={product.image_path} className="img-fluid" />
            </div>
            <div className="col-8">
              <div>{product.name}</div>
              <div>{product.price}</div>
              {renderCanBuyBtn(product.can_buy)}
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
              {renderTabPanel(product)}
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">shop-IT</a>
        </div>
      </nav>
      <hr />
      <hr />
      {renderProducts()}
    </div>
  );
}

export default App;
