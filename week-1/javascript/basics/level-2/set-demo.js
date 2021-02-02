// Set ( from ES6)

const set = new Set();

set.add("item-1")
set.add("item-2")
set.add("item-3")
set.add("item-1")

// console.log(set);


// Ex

const products = new Set();
products.add({ id: 1, name: 'item-1' })
products.add({ id: 2, name: 'item-2' })
products.add({ id: 3, name: 'item-3' })
products.add({ id: 1, name: 'item-1' })

console.log(products.size)


//----------------------------------------------------------------

const weakSet = new WeakSet();

let o1 = { name: 'item-1' }
let o2 = { name: 'item-2' }
let o3 = { name: 'item-3' }

weakSet.add(o1)
weakSet.add(o2)
weakSet.add(o2)

o1 = null;

console.log(weakSet);

//-------------------------------------------------------------