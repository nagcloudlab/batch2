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

import { useSelector } from 'react-redux'

function App() {

  const cart = useSelector(state => state.cart)

  return (
    <div className="container">
      <Navbar title="shop-IT" />
      <hr />
      <span>{Object.entries(cart).length} item(s) in cart</span>
      <hr />
      <Router>
        <div>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link className="nav-link" to="/items">Items</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
          </ul >
          <hr />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/items" render={props => <ItemList />} />
            <Route path="/cart" render={props => <CartView />} />
            <Route component={NotFound} />
          </Switch>

        </div>
      </Router>
    </div >
  );
}

export default App;
