
import React, { Component } from 'react';

function withCard(InputComponent) {
    class Container extends Component {
        render() {
            return (
                <div className="card">
                    <div className="card-header">{this.props.title}</div>
                    <div className="card-body">
                        <InputComponent {...this.props} />
                    </div>
                </div>
            )
        }
    }
    Container.displayName = `WithCard<${InputComponent.name}>`
    return Container;
}


export { withCard }