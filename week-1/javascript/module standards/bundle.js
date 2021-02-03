(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


// 

const greet = require('batch2-greeting')

greet('en')
greet('es')
greet('ar')
},{"batch2-greeting":5}],2:[function(require,module,exports){

//----------------------------------------------------------------

// var g = g || {};
// (function () {
//     function greet() {
//         console.log("marhaban");
//     }
//     g.ar = greet;
// })();

//----------------------------------------------------------------

console.log("-ar.js-");

function greet() {
    console.log("marhabhan");
}

// module.exports = greet;
module.exports = {
    greet
}

},{}],3:[function(require,module,exports){

//----------------------------------------------------------------
// var g = g || {};

// (function () {

//     function greet() {
//         console.log("hello");
//     }

//     g.en = greet;

// })();
//----------------------------------------------------------------


// (function () {

console.log("-en.js-");

function greet() {
    console.log("hello");
}

// module.exports = greet;
module.exports = {
    greet
}

// })


},{}],4:[function(require,module,exports){

//----------------------------------------------------------------
// var g = g || {};

// (function () {

//     function greet() {
//         console.log("ola");
//     }

//     g.es = greet

// })();
//----------------------------------------------------------------


console.log("-es.js-");

function greet() {
    console.log("ola");
}

// module.exports = greet;
module.exports = {
    greet
}

},{}],5:[function(require,module,exports){

// console.log("-index.js-");


//----------------------------------------------------------------

// var g = g || {};

// g.en();
// g.es();
// g.ar();

//----------------------------------------------------------------


//----------------------------------------------------------------


console.log("-index.js-");

const en = require('./en')
const es = require('./es')
const ar = require('./ar')
const tn = require('./tn')

function greet(lang) {
    if (lang === 'en') {
        en.greet()
    }
    if (lang === 'es') {
        es.greet()
    }
    if (lang === 'ar') {
        ar.greet()
    }
    if (lang === 'tn') {
        tn.greet()
    }
}

module.exports = greet
},{"./ar":2,"./en":3,"./es":4,"./tn":6}],6:[function(require,module,exports){

//----------------------------------------------------------------

// var g = g || {};
// (function () {
//     function greet() {
//         console.log("marhaban");
//     }
//     g.ar = greet;
// })();

//----------------------------------------------------------------

console.log("-tn.js-");

function greet() {
    console.log("vanakkam");
}

// module.exports = greet;
module.exports = {
    greet
}

},{}]},{},[1]);
