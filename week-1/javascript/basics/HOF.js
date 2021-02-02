
//----------------------------------------------------------------
// HOF => Higher Order Function  ( Functional programming principle )
//----------------------------------------------------------------


function hi() {
    console.log("hi"); // main logic
}
hi()
function hiWithBanner() {
    console.log("🌷🌷🌷🌷"); //around logic e.g logging, security check , error handling...
    console.log("hi"); // main logic
    console.log("🌷🌷🌷🌷");
}
hi()

hiWithBanner() // without flower banner

function hello() {
    console.log("hello"); // main logic
}
function helloWithBanner() {
    console.log("🌷🌷🌷🌷");
    console.log("hello"); // main logic
    console.log("🌷🌷🌷🌷");
}
hello()
helloWithBanner()

/**
 *
 *  design issues
 *  --------------------------------
 *
 *  ==> code tangling / coupling
 *  ==> code scattering / duplication
 *
 */


 //----------------------------------------------------------------

 // Solution :

