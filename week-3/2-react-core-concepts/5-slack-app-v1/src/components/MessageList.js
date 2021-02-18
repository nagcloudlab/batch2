import React, { Component } from 'react';
import store from '../store';


class MessageList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: store.getState().messages[props.currentChannel] || []
        }
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            let currentChannel = this.props.currentChannel;
            const messages = store.getState().messages[currentChannel] || []
            this.setState({ messages })
        })
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    componentDidUpdate(prevProps) {
        if (this.props.currentChannel !== prevProps.currentChannel) {
            const messages = store.getState().messages[this.props.currentChannel] || []
            this.setState({ messages })
        }
    }

    renderMessages() {
        let { messages } = this.state;
        return messages.map((message, idx) => {
            return (
                <div key={idx} className="alert alert-info">
                    {message}
                </div>
            )
        })
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">MessageList</div>
                <div className="card-body">
                    {this.renderMessages()}
                </div>
            </div>
        );
    }
}

export default MessageList;