import React, { Component } from 'react';

import { connect } from '../HOF/connect';
import { withCard } from '../HOF/withCard';

// Presentatlional component ( How things look )
class ChannelList extends Component {

    handleClick = (e, channel) => {
        const { onSelect } = this.props;
        if (onSelect)
            onSelect(channel)
    }
    renderChannels() {
        let { channels } = this.props;
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
            <>
                { this.renderChannels()}
            </>

        );
    }
}



const mapStateToProps = state => {
    return {
        channels: state.channels || []
    }
}

// const ChannelListWithCard = withCard(ChannelList);
// const ChannelListWithCardAndWithStore = connect(ChannelListWithCard, mapStateToProps)
// export default ChannelListWithCardAndWithStore;

export default connect(ChannelList, mapStateToProps)