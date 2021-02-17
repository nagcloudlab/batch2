
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Greeting from './components/Greeting'

class App extends Component {

  state = {
    message: 'hello'
  }

  constructor(props) {
    super(props)
    //console.log(props);
    console.log("App : constructor()");
  }

  changeMessage(message) {

    // imp-note : we can't mutate directly
    // this.state.message = message;

    this.setState({
      message
    },
      // () => {
      //   console.log("after state change");
      // }
    )

  }


  render() {
    console.log("App : render()");

    // this.props.title = "New Title"; // Never do this, becox props are read-only

    // let title = this.props.title;
    // let trainer = this.props.trainer;

    // or

    let { title, trainer } = this.props;
    let { message } = this.state;

    return (
      <div className="container">
        <hr />
        <h1>{title} - <small>by {trainer}</small></h1>
        <hr />
        <button onClick={e => this.changeMessage('good morning')} className="btn btn-dark mr-2">GM 🌞</button>
        <button onClick={e => this.changeMessage('good noon')} className="btn btn-dark mr-2">GN 🌞</button>
        <button onClick={e => this.changeMessage('good evening')} className="btn btn-dark mr-2">GE 🌝</button>
        <hr />

        <Greeting message={message} />

      </div>
    );
  }

}

export default App;

