
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Greeting from './components/Greeting';

class App extends Component {
  state = {
    message: 'hello'
  }
  changeMessage = message => {
    this.setState({ message })
  }
  render() {
    let { message } = this.state;
    return (
      <div className="container">
        <hr />
        <h1>component lifecycle</h1>
        <hr />
        <button onClick={e => this.changeMessage("good morning")} className="mr-3">GM</button>
        <button onClick={e => this.changeMessage("good noon")} className="mr-3">GN</button>
        <button onClick={e => this.changeMessage("good evening")} className="mr-3">GE</button>
        <button onClick={e => this.changeMessage("")} className="mr-3">destroy greeting</button>
        <hr />

        {message ? <Greeting message={message} /> : null}

      </div>
    );
  }
}

export default App;