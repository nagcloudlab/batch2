import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './nav-bar';
import ItemList from './item-list';

function App() {

  return (
    <div className="container">
      <Navbar title="shop-IT" />
      <hr />
      <hr />
      <ItemList />
    </div>
  );
}

export default App;
