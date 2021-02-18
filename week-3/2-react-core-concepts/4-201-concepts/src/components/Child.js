import React, { Component } from 'react';

class Child extends Component {
    render() {
        return (
            <div className="card card-body">
                Child
                {undefined.name}
            </div>
        );
    }
}

export default Child;