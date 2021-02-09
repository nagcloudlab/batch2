import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'

//----------------------------------------------------------------
// DOM API
//----------------------------------------------------------------

const greetBtn = document.querySelector('.btn-dark')
const hideBtn = document.querySelector('.btn-danger')
const showBtn = document.querySelector('.btn-success')

const card = document.querySelector('.card')
greetBtn.addEventListener('click', e => {
    card.innerHTML = "good morning"
})
hideBtn.addEventListener('click', e => {
    card.style.display = 'none'
})
showBtn.addEventListener('click', e => {
    card.style.display = ''
})

//----------------------------------------------------------------
// DOM API + XHR(XMLHTTPRequest) API | Fetch Api
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
