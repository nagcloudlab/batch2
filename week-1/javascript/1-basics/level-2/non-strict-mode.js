"use strict";

/*
     global object
     ----------------
     browser envi ==> window
     Node.js envi ==> process/global

*/


function func() {
    console.log(this)
}

func(); // this ==> undefined

let o1 = { name: 'ONE' }
o1.func = func;
o1.func(); // this ==> o1

let o2 = { name: 'TWO' }
func.call(o2) // this ==> o2