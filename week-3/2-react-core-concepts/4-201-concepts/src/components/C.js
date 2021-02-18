import React, { Component } from 'react';
import ColorContext from './ColorContext';

class C extends Component {
    render() {
        return (
            <ColorContext.Consumer>
                {value => {
                    return (
                        <div className="card card-body">
                            C Component <br /><br />
                            <span>{value}</span>
                        </div>
                    )
                }}
            </ColorContext.Consumer>

        );
    }
}

export default C;