console.log("-index.js-");

// css file as modules
// require('./css/style.css')
// require('./css/theme.css')

// or

import './css/style.css'
import './css//theme.css'

// scripts as modules
// const en = require('./en')
// const es = require('./es')

// or

import en from './en'
import es from './es'


//----------------------------------------------------------------
// DOM Api
//----------------------------------------------------------------


const enBtn = document.getElementById('en')
const esBtn = document.getElementById('es')

enBtn.addEventListener('click', e => {
    en();
})

esBtn.addEventListener('click', e => {
    es();
})

//-------------------------------------------------------------