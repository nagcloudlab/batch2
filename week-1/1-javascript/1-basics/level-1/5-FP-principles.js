

//----------------------------------------------------------------
// FP principles
//----------------------------------------------------------------

// i.e function can be treated as first-class citizen

// #1 - A function can be stored in a variable or value
// #2 - A parameter of a function can be a function
// #3 - A return value of a function can be a function

//----------------------------------------------------------------
// #1 - A function can be stored in a variable or value

function greeting() {
    console.log("hello");
}
let sayHello = greeting
sayHello()

//----------------------------------------------------------------
// #2 - A parameter of a function can be a function

// EN - Universe
function greet(f) {
    console.log("🌻🌻🌻🌻🌻🌻🌻")
    if (f)
        f();
    else
        console.log("hello")
    console.log("🌻🌻🌻🌻🌻🌻🌻")
}

// TN - Tamil
function greetInTamil() {
    console.log("வணக்கம்");
}

// AR - Arabic
function greetInArabic() {
    console.log("مرحبا");
}

// greet()
// greet(greetInTamil)

//----------------------------------------------------------------
// #3 - A return value of a function can be a function

function teach() {
    console.log("teaching javascript")
    let learn = function () {
        console.log("learning javascript")
    }
    console.log("teaching ends")
    return learn
}

let learnFunc = teach()


learnFunc();
learnFunc()

//----------------------------------------------------------------



