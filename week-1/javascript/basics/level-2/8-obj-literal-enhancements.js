


//----------------------------------------------------------------
// obj-literal enhancements
//----------------------------------------------------------------



let name = "Nag"
let age = 37

// ES5 version

let person1 = {
    name: name,
    age: age,
    sayName: function () {
        //..
    },
    3: 'three'
}


// ES6 version

const addressType = "office"; // vacation | office

let person2 = {
    name,
    age,
    sayName() {
        //..
    },
    'say Age'() {

    },
    [1 + 2]: 'three',
    [addressType + "-address"]: 'chennai-india',

}
person2['say Age']()