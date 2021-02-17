import React, { Component } from 'react';

class VotingSummary extends Component {

    renderSummary() {
        let { value: summary } = this.props;
        return Object.entries(summary).map((item, idx) => {
            return (
                <tr>
                    <td>{item[0]}</td>
                    <td>{item[1].up}</td>
                    <td>{item[1].down}</td>
                    <td>{item[1].up + (-(item[1].down))}</td>
                </tr>
            )
        })
    }
    renderTable() {
        let { value: summary } = this.props;
        if (Object.entries(summary).length === 0) {
            return <div>No Votes</div>
        } else {
            return (
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Voting-Item-Name</th>
                            <th><i className="fa fa-thumbs-up"></i></th>
                            <th><i className="fa fa-thumbs-down"></i></th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSummary()}
                    </tbody>
                </table>
            )
        }
    }
    render() {

        return (
            <div className="card card-body">
                {this.renderTable()}
            </div>
        );
    }
}

export default VotingSummary;