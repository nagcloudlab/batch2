import React, { Component } from 'react';
import VotingItem from './VotingItem';
import VotingSummary from './VotingSummary';

class VotingBox extends Component {

    state = {
        items: [
            { id: 1, name: 'react' },
            { id: 2, name: 'angular' },
        ],
        summary: {}
    }

    updateSummary(record) {
        let { name, up, down } = record
        let { summary } = this.state;
        let s = summary[name] || { up: 0, down: 0 }
        if (up)
            s.up += 1
        if (down)
            s.down += 1
        this.setState({ summary: { ...summary, [name]: s } })
    }

    renderVotingItems() {
        let { items } = this.state
        return items.map((item, idx) => {
            return (
                <div className="col-3">
                    <VotingItem
                        value={item}
                        onVote={record => this.updateSummary(record)} />
                </div>
            )
        })
    }

    render() {
        let { summary } = this.state
        return (
            <div>
                <div className="card">
                    <div className="card-header">Voting Box</div>
                    <div className="card-body">
                        <div className="row mb-3">
                            {this.renderVotingItems()}
                        </div>
                        <VotingSummary value={summary} />
                    </div>
                </div>
            </div>
        );
    }
}

export default VotingBox;