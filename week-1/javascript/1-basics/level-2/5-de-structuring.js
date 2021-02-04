
/**
 *
 * // de-structuring ( ES6 )
 * 
 *  read object's properties or array elements into variables with one line code
 *
 */

let person = {
    name: 'Nag',
    age: 37
}

// manual de-structuring
let name = person.name
let age = person.age

// or

let { name: name, age: age } = person

// or

let { name, age } = person

let { name: myName, age: myAge } = person

//----------------------------------------------------------------


let numbers = [1, 2, 3, 4, 5, 6, 7, [8, 9]]

let n1 = numbers[0]
let n2 = numbers[1]
let n3 = numbers[2]
let n4 = numbers[3]

// or

let [n1, n2, n3, n4, n5 = 0, , n7, [n8, n9]] = numbers

//----------------------------------------------------------------