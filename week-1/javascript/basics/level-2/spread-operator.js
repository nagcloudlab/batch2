
// spread operator


let arr1 = [1, 2, 3]
let arr2 = [7, 8, 9]
let arr3 = [...arr1, 4, 5, 6, ...arr2]

//----------------------------------------------------------------


let o1 = { x: 1, y: 2 }
let o2 = { z: 3 }

let o3 = { ...o1, ...o2 } // deep copy


//----------------------------------------------------------------


function func(n1, n2) {
    console.log(n1, n2)
}

// func(10, 20)

let numbers = [10, 20]
func(...numbers)

//----------------------------------------------------------------