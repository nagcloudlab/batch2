import React, { Component, PureComponent } from 'react';

class Greeting extends PureComponent {
    constructor(props) {
        super(props)
        console.log("Greeting::constructor");
    }

    render() {
        console.log("Greeting::render");
        const { message } = this.props
        return (
            <div className="alert alert-info">
                <p>{message}</p>
                <hr />
                {/* <p>{new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })}</p> */}
            </div>
        );
    }

    componentDidMount() {
        console.log("Greeting::componentDidMount");
        // this.interval = setInterval(() => {
        //     this.forceUpdate();
        // }, 1000);
    }


    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("Greeting::shouldComponentUpdate");
    //     if (this.props.message === nextProps.message)
    //         return false
    //     else
    //         return true
    // }
    

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Greeting::componentDidUpdate");
        console.log(this.props)
        console.log(prevProps);
        if (this.props.message !== prevProps.message) {
            //....
        }
    }

    componentWillUnmount() {
        console.log("Greeting::componentWillUnmount");
        clearInterval(this.interval) // cleaning..
    }
}

export default Greeting;