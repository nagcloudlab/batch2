


import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Box from './components/Box';
import Veg from './components/Veg';
import NonVeg from './components/NonVeg';
import A from './components/A';

class App extends Component {
  render() {
    return (
      <div className="container">
        <hr />
        <h1>201 react concepts</h1>
        <hr />

        {
          /*
          <Box>
            <Veg />
            <Veg />
            <NonVeg />
          </Box> 
          */
        }
        <A color={"red"} />

      </div>
    );
  }
}

export default App;