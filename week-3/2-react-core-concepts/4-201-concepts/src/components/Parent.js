import React, { Component } from 'react';
import Child from './Child';
import ErrorBoundary from './ErrorBoundary';

class Parent extends Component {
    render() {
        return (
            <div className="card card-body">

                Parent

                <ErrorBoundary>
                    <Child />
                </ErrorBoundary>

            </div>
        );
    }
}

export default Parent;