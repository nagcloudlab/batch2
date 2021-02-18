import React, { Component } from 'react';
import B from './B';
import ColorContext from './ColorContext';

class A extends Component {
    render() {
        return (
            <div className="card card-body">
                A component  <br /><br /> <span>{this.props.color}</span>

                <ColorContext.Provider value={this.props.color}>
                    <B />
                </ColorContext.Provider>


            </div>
        );
    }
}

export default A;