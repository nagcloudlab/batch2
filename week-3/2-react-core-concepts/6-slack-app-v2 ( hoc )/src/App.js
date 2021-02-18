
import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import ChannelList from './components/ChannelList';
import MessageList from './components/MessageList';

class App extends Component {

  state = {
    currentChannel: null
  }

  changeCurrentChannel = channel => {
    this.setState({ currentChannel: channel })
  }

  render() {
    let { currentChannel } = this.state
    return (
      <div className="container">
        <hr />
        <h1>slack _ v1</h1>
        <hr />

        <div className="row">
          <div className="col-4">
            <ChannelList
              title="ChannelList"
              currentChannel={currentChannel}
              onSelect={channel => this.changeCurrentChannel(channel)} />
          </div>
          <div className="col-8">
            <MessageList title="MessageList" currentChannel={currentChannel} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;