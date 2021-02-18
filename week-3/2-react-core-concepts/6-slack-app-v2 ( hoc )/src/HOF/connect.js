
import React, { Component } from 'react';
import store from '../store';

// HOF
function connect(InputComponent, callback) {

    //HOC i.e Container ( how things shoud work)
    class Container extends Component {
        constructor(props) {
            super(props);
            this.state = callback(store.getState(), props)
        }
        componentDidMount() {
            this.unsubscribe = store.subscribe(() => {
                const state = callback(store.getState(), this.props)
                this.setState({ ...state })
            })
        }
        componentWillUnmount() {
            this.unsubscribe();
        }

        componentDidUpdate(prevProps) {
            if (this.props.currentChannel !== prevProps.currentChannel) {
                const state = callback(store.getState(), this.props)
                this.setState({ ...state })
            }
        }
        render() {
            return (
                <div>
                    <InputComponent {...this.props} {...this.state} />
                </div>
            )
        }
    }
    Container.displayName=`Connect<${InputComponent.name}>`
    return Container;

}

export { connect }