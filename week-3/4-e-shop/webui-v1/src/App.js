import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Navbar from './nav-bar';
import ItemList from './item-list';
import CartView from './cart-view';
import Home from './home';
import NotFound from './not-found';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [cart, setCart] = useState({})

  const addToCart = item => {
    let { id } = item
    let cartLine = cart[id]
    if (cartLine) {
      cartLine = { ...cartLine, qty: cartLine.qty + 1 }
    } else {
      cartLine = { item, qty: 1 }
    }
    setCart({ ...cart, [id]: cartLine })
  }

  return (
    <div className="container">
      <Navbar title="shop-IT" />

      <hr />
      <span>{Object.entries(cart).length} item(s) in cart</span>
      <hr />

      <Router>
        <div>
          <ul className="nav nav-pills">
            {/* 
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li> 
            */}
            <li className="nav-item">
              <Link className="nav-link" to="/items">Items</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            {/* 
            <li className="nav-item">
              <Link className="nav-link" to="/orders">Orders</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li> 
            */}
          </ul >
          <hr />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/items" render={props => <ItemList cart={cart} onBuy={item => addToCart(item)} />} />
            <Route path="/cart" render={props => <CartView cart={cart} />} />
            <Route component={NotFound} />
          </Switch>

        </div>
      </Router>
    </div >
  );
}

export default App;
