
//----------------------------------------------------------------
// hotel module
//--------------------------------------------------------------

const hotel = {
    getFood() {
        return new Promise((resolve, reject) => {
            // api call 
            setTimeout(() => {

                console.log("hotel resolving promise");
                resolve("biryani 🍗")

                // console.log("hotel rejecting promise");
                // reject("no biryani")

            }, 5000)
        });
    }
}

//----------------------------------------------------------------
// bar module
//--------------------------------------------------------------


const bar = {
    getDrink() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("bar resolving promise ");
                resolve("BEER 🍺")
            }, 2000)
        });
    }
}


//----------------------------------------------------------------
// person module
//----------------------------------------------------------------

const person = {
    doSomething() {
        console.log("person feels hungry..requesting food on hotel module");
        const promise1 = hotel.getFood();
        console.log("person feels to have drink");
        const promise2 = bar.getDrink();
        console.log("person got promise, defere actions to future..")
        // Promise.all([promise1, promise2])
        Promise.race([promise1, promise2])
            .then(item => {
                //console.log("yummy with " + food);
                // return items[0].toUpperCase() + " " + items[1]
                return item;
            })
            .then(enrichedFood => {
                console.log("yummy " + enrichedFood)
            })
            .catch(err => {
                console.log("oops with " + err);
            })
    }
}

person.doSomething();