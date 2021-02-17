console.log("-index.-js-");


// ---------------------------------
// UI component class
// ---------------------------------

// JSX ==> JavaScript eXtension for compoent templates

function Clock(props) {
    let { timeZone } = props; // ES6 syntax => de-structuring

    return (
        <div className="card">
            <div className="card-header">{timeZone}</div>
            <div className="card-body">
                <span className="badge bg-dark">{new Date().toLocaleTimeString('en-US', { timeZone })}</span>
            </div>
        </div>
    )

}

function Wall() {
    return (
        <div>
            <div className="row">
                <div className="col-4">
                    <Clock timeZone="Asia/Kolkata" />
                </div>
                <div className="col-4">
                    <Clock timeZone="Asia/Dubai" />
                </div>
                <div className="col-4">
                    <Clock timeZone="America/New_york" />
                </div>
            </div>
        </div>
    )
}


setInterval(() => {

    ReactDOM.render(<Wall />, document.getElementById('root'))

}, 1000)

