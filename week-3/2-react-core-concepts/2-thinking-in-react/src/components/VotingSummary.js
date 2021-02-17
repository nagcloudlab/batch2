import React, { Component } from 'react';

class VotingSummary extends Component {

    renderSummaryItems() {

        let { value: summary } = this.props;

        return Object.entries(summary).map((item, idx) => {
            return (
                <tr>
                    <td>{item[0]}</td>
                    <td>{item[1].up}</td>
                    <td>{item[1].down}</td>
                    <td>{item[1].up + (-item[1].down)}</td>
                </tr>
            )
        })
    }
    render() {

        return (
            <div className="card card-body">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>up</th>
                            <th>Down</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSummaryItems()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default VotingSummary;