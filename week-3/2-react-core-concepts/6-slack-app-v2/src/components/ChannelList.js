import React, { Component } from 'react';
import store from '../store';


class ChannelList extends Component {
    constructor() {
        super();
        this.state = {
            channels: store.getState().channels
        }
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            const channels = store.getState().channels || []
            this.setState({ channels })
        })
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    handleClick = (e, channel) => {
        const { onSelect } = this.props;
        if (onSelect)
            onSelect(channel)
    }
    renderChannels() {
        let { channels } = this.state;
        let { currentChannel } = this.props;
        return channels.map((channel, idx) => {
            return (
                <div key={idx}
                    className="list-group-item"
                    onClick={e => this.handleClick(e, channel)}
                    style={{ cursor: 'pointer', backgroundColor: channel === currentChannel ? '#DEF' : '#FFF' }}>
                    {channel}
                </div>
            )
        })
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">ChannelList</div>
                <div className="card-body">
                    {this.renderChannels()}
                </div>
            </div>
        );
    }
}

export default ChannelList;