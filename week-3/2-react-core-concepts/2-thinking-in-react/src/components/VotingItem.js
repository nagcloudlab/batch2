import React, { Component } from 'react';

class VotingItem extends Component {

    state = {
        vcount: 0
    }

    incOrDecCount(v) {
        let { vcount } = this.state
        let { value: item, onVote } = this.props
        this.setState({ vcount: vcount + v }, () => {
            let record = { name: item.name, up: v === 1, down: v === -1 }
            if (onVote)
                onVote(record)
        })
    }

    render() {
        let { value: item } = this.props
        let { vcount } = this.state
        return (
            <div className="card card-body">
                <p className="fs-3">{item.name}</p>
                <hr />
                <div className="row">
                    <div className="col-6">
                        <button onClick={e => this.incOrDecCount(1)} className="btn btn-dark">+1</button>
                    </div>
                    <div className="col-6">
                        <button onClick={e => this.incOrDecCount(-1)} className="btn btn-dark">-1</button>
                    </div>
                </div>
                <hr />
                <span className="badge bg-warning">{vcount}</span>
                <hr />
            </div>
        );
    }
}

export default VotingItem;