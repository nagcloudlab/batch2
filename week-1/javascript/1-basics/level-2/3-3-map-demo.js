
const map = new Map();
map.set(1, "One")
map.set(2, "Two")
map.set(3, "Three")
map.set(4, "Four")

console.log(map.get(1));

//-------------------------------

const data = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four"
}

console.log(data[1]);

//--------------------------------

const owner1 = { name: 'Nag' }
const owner2 = { name: 'Indu' }

const car1 = { name: 'CAR1' }
const car2 = { name: 'CAR2' }


let map1 = new Map()
map1.set(owner1, car1)
map1.set(owner2, car2)

console.log(map1);

//--------------------------------