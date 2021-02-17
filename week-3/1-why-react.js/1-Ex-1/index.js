console.log("-index.-js-");


// 
const clock1 = document.getElementById('asia-kolkata')
const clock2 = document.getElementById('asia-dubai')
const clock3 = document.getElementById('america-newyork')



setInterval(() => {
    clock1.innerHTML = `
        <div class="card">
            <div class="card-header">Asia/Kolkata</div>
            <div class="card-body">
                <span class="badge bg-dark">${new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/kolkata' })}</span>
            </div>
        </div>
    `
    clock2.innerHTML = `
        <div class="card">
            <div class="card-header">Asia/Dubai</div>
            <div class="card-body">
                <span class="badge bg-dark">${new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai' })}</span>
            </div>
        </div>
    `
    clock3.innerHTML = `
    <div class="card">
        <div class="card-header">America/New_york</div>
        <div class="card-body">
            <span class="badge bg-dark">${new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_york' })}</span>
        </div>
    </div>
`
}, 1000)

