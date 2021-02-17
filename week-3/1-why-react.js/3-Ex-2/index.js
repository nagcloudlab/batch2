console.log("-index.-js-");


const clock1 = document.getElementById('asia-kolkata')
const clock2 = document.getElementById('asia-dubai')
const clock3 = document.getElementById('america-newyork')


// ---------------------------------
// UI component class
// ---------------------------------

function Clock(props) {
    let { timeZone } = props; // ES6 syntax => de-structuring
    return `
    <div class="card">
        <div class="card-header">${timeZone}</div>
        <div class="card-body">
            <span class="badge bg-dark">${new Date().toLocaleTimeString('en-US', { timeZone })}</span>
        </div>
    </div>
    `
}


setInterval(() => {
    clock1.innerHTML = Clock({ timeZone: 'Asia/Kolkata' })
    clock2.innerHTML = Clock({ timeZone: 'Asia/Dubai' })
    clock3.innerHTML = Clock({ timeZone: 'America/New_york' })
}, 1000)

