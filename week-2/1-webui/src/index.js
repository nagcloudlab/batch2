import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'

//----------------------------------------------------------------
// DOM API
//----------------------------------------------------------------

const greetBtn = document.querySelector('.btn-dark')
const hideBtn = document.querySelector('.btn-danger')
const showBtn = document.querySelector('.btn-success')

const box = document.querySelector('.alert')
greetBtn.addEventListener('click', e => {
    box.innerHTML = "good morning"
})
hideBtn.addEventListener('click', e => {
    box.style.display = 'none'
})
showBtn.addEventListener('click', e => {
    box.style.display = ''
})

//----------------------------------------------------------------
// DOM API + XHR(XMLHTTPRequest) API or Fetch Api
//----------------------------------------------------------------

// Ref : https://www.w3schools.com/xml/xml_http.asp

const top5TodosBtn = document.querySelector('#top5-todos-btn')
const todosList = document.querySelector('#todos-list')

const progressMessage = document.querySelector('#progress-message')

//----------------------------------------------
// #1 XHR
//----------------------------------------------
// top5TodosBtn.addEventListener('click', e => {
//     // HTTP request to api-server
//     const url = "https://jsonplaceholder.typicode.com/todos?_limit=5"
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true)
//     xhr.send() // // async http call
//     progressMessage.innerHTML = "loading todos"
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             const jsonText = xhr.responseText;
//             const todos = JSON.parse(jsonText);
//             const todoLiElements = todos.map(todo => {
//                 return `
//                 <li class="list-group-item">
//                     <span class="badge badge-danger">${todo.id}</span>
//                     <span>${todo.title}</span>
//                     <span class="badge badge-dark">${todo.completed}</span>
//                 </li>
//                 `
//             })
//             progressMessage.innerHTML = ""
//             todosList.innerHTML = todoLiElements.join(" ")
//         }
//     }
// })

//----------------------------------------------
// #2 Fetch
//----------------------------------------------

// top5TodosBtn.addEventListener('click', e => {
//     // HTTP request to api-server
//     const url = "https://jsonplaceholder.typicode.com/todos?_limit=5"
//     const promise = fetch(url) // async htp request
//     promise
//         .then(response => response.json())
//         .then(todos => {
//             const todoLiElements = todos.map(todo => {
//                 return `
//                         <li class="list-group-item">
//                             <span class="badge badge-danger">${todo.id}</span>
//                             <span>${todo.title}</span>
//                             <span class="badge badge-dark">${todo.completed}</span>
//                         </li>
//                         `
//             })
//             progressMessage.innerHTML = ""
//             todosList.innerHTML = todoLiElements.join(" ")
//         })
//         .catch(err => {
//             progressMessage.innerHTML = err.message
//         })
// })


//----------------------------------------------
// #2 axios ( in browser uses XHR behind scenes )
//----------------------------------------------

top5TodosBtn.addEventListener('click', e => {
    // HTTP request to api-server
    const url = "https://jsonplaceholder.typicode.com/todos?_limit=5"
    const promise = axios.get(url) // async htp request
    promise
        .then(response => response.data)
        .then(todos => {
            const todoLiElements = todos.map(todo => {
                return `
                        <li class="list-group-item">
                            <span class="badge badge-danger">${todo.id}</span>
                            <span>${todo.title}</span>
                            <span class="badge badge-dark">${todo.completed}</span>
                        </li>
                        `
            })
            progressMessage.innerHTML = ""
            todosList.innerHTML = todoLiElements.join(" ")
        })
        .catch(err => {
            progressMessage.innerHTML = err.message
        })
})



//----------------------------------------------------------------
// DOM API + Timer Api
//----------------------------------------------------------------

/*

    setInterval()
    setTimeout()


*/



setInterval(e => {
    const timeEle = document.querySelector('#time-now') // DOM Query i.e search oprn on tree data-structure
    const date = new Date()
    timeEle.innerHTML = date.toLocaleTimeString('en-US', { timeZone: 'America/New_york' })
}, 1000)



//----------------------------------------------------------------
// Slide show
//----------------------------------------------------------------

const imgEle = document.querySelector('#po')
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')


stopBtn.disabled = true

startBtn.addEventListener('click', e => {
    startBtn.disabled = true
    stopBtn.disabled = false
    let idx = 1;
    const interval = setInterval(() => {
        idx++
        const img_src = `images/${idx}.jpeg`;
        imgEle.src = img_src
        if (idx === 4) {
            idx = 0
        }
    }, 1000)
    stopBtn.addEventListener('click', e => {
        clearInterval(interval)
        stopBtn.disabled = true
        startBtn.disabled = false
    })
})