import React, { Component } from 'react';

import { connect } from '../HOF/connect'
import { withCard } from '../HOF/withCard'

class MessageList extends Component {

    renderMessages() {
        let { messages } = this.props;
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
            <>
                {this.renderMessages()}
            </>
        );
    }
}



// export default MessageList;
const mapStateToProps = (state, props) => {
    const messages = state.messages[props.currentChannel] || []
    console.log(messages)
    return {
        messages
    }
}
export default connect(MessageList, mapStateToProps)