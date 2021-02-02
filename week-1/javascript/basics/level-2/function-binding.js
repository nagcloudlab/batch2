"use strict";


/**
 *
 *  function binding
 *  -----------------
 *
 *   ==> to execute any function by an object ,
 *       we must do binding
 *
 *  types
 *  --------
 *  => static i.e keep that function on object for-ever
 *  => dynamic i.e execute function on object only for that call
 *
 */

//----------------------------------------------------------------

function add(n1, n2) {
    const result = n1 + n2;
    return result;
}

// const result = add(12, 13)
// console.log(result);

//----------------------------------------------------------------

// function sayName() {
//     console.log(this);
//     console.log(`im ${this.name}`)
// }
// // sayName(); // Error
// let person1 = { name: 'Nag' }
// person1.sayName = sayName // static function binding
// person1.sayName();


// let person2 = { name: 'Indu' }
// Object.preventExtensions(person2)

// sayName.call(person2) // dynamic function binding


//----------------------------------------------------------------

// E.g

// cts - academy
function doTraining(sub, days) {
    console.log(`the trainer ${this.name} , giving training on ${sub} for ${days} days`)
}
// doTraining("fullstack", 40) // Error


// BLT
const bltTnr = { name: 'Nag' }


//----------------------------------------------------------------
// static function binding
//----------------------------------------------------------------

// bltTnr.doTraining = doTraining 
// bltTnr.doTraining("fullstack", 40); 

//----------------------------------------------------------------
// dynamic function binding
//----------------------------------------------------------------

// // way-1 : call
// doTraining.call(bltTnr, 'fullstack', 40); // binding + invocation 

// //way-2 : apply
// doTraining.apply(bltTnr, ['fullstack', 40]);// binding + invocation 

// //way-3: bind
// const newF = doTraining.bind(bltTnr, 'fullstack') // binding 

// // on event,
// newF(20); //  invocation
// newF(40); //  invocation

//----------------------------------------------------------------

// QUIZ

// let pName = "global";

let person = {
    pName: 'Nag', // obj's property
    sayName: function () {
        //let pName = "Local"
        console.log(`im ${pName}`) // read from scope hierarchy
        console.log(`im ${this.pName}`) // read from obj's hierarchy
    } // static function binding
}

// person.sayName();

//----------------------------------------------------------------


