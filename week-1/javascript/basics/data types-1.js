"use strict"


console.log("---------------------------")
console.log('-data-types-')
console.log("---------------------------")


//----------------------------------------------------------------------------------
/**
 *
 * basic data types
 *  --------------------
 *
 *  1. simple/primitives  ==> values
 *
 *  a. undefined
 *  b. string
 *  c. number
 *  d. boolean
 *  e. bigint
 *
 *  2. complex/reference  ==> objects
 *
 * 
 */

//----------------------------------------------------------------------------------
// 1. simple/primitives 
//----------------------------------------------------------------------------------

//-------------------------------------------------
// undefined
//-------------------------------------------------

var v;

//-------------------------------------------------
// string
//-------------------------------------------------

var tnrName = "Nag"
var company = 'cognizant'


var dynamicString1 = "the trainer " + tnrName + " teaching in " + company
var dynamicString2 = `the trainer ${tnrName} teaching in ${company}` // string interpolation ( es6 )

var multiLineSteing1 = `
    <div>
        <h1>${tnrName}</h1>
        <h4>${company}</h4>
    </div>
`

var resultString = `the sume of 1 and 2 is ${1 + 2}`


//-------------------------------------------------
// number
//-------------------------------------------------

var count = 12
var cost = 12.12


//-------------------------------------------------
// boolean
//-------------------------------------------------

var isFinished = false

/**
 * 
 *  imp-note :
 * 
 *  falsy values :   false,"",0,undefied,null,NaN
 * 
 *  reference : https://dorey.github.io/JavaScript-Equality-Table/
 * 
 */

//-------------------------------------------------


//-------------------------------------------------
// bigint
//-------------------------------------------------

var count = 1234567890123456789012345678901234567890n

