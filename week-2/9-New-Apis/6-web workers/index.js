



const longRunningBtn = document.getElementById('long-running-btn')
let w;
longRunningBtn.addEventListener('click', e => {
    w = new Worker("./long-running.js");
    w.onmessage = message => {
        console.log(message);
    }
})


const nameField = document.getElementById('name-field')
const nameSpan = document.getElementById('name-span')

nameField.addEventListener('keyup', e => {
    nameSpan.innerText = e.target.value;
})