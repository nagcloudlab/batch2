


//----------------------------------------------------------------
// iterable objects
//----------------------------------------------------------------

// data structure + iteration logic ==> iterable object
let idMaker = {
    [Symbol.iterator]: function () {
        let i = 0;
        return {
            next: function () {
                console.log("next()");
                i++;
                let value = i <= 10 ? i : undefined;
                let done = i <= 10 ? false : true
                return { value, done }
            }
        }
    }
}


// for-of loop ==> to traverse any iterable objects

// for (let id of idMaker) {
//     console.log(id);
// }

// 

// const ids = [...idMaker]

// const [id1, id2, id3] = idMaker

//----------------------------------------------------------------

// const items = [
//     "item-1",
//     "item-2",
//     "item-3",
// ]

// for (let item of items)
//     console.log(item);
// let newItems = [...items]
// let [x, y, z] = items




