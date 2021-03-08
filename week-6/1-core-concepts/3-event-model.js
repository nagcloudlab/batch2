
// imp - note : In Node.js , All objects that emit events are instances of the EventEmitter class. 

const EventEmitter = require('events').EventEmitter;


//-----------------------------------------------
// const ee = new EventEmitter(); // e.g like button in DOM


// // listening for 'some-event'
// ee.on('some-event', () => {
//     console.log("handling 'some-event' on ee");
// })

// setTimeout(() => {
//     // trigger an event
//     ee.emit('some-event')
// }, 3000)
//-----------------------------------------------

// e.g

/*

  Automated room

     Door

        - open
        - close

    Fan

        - on
        - off




    coding OO principle :
     ==> open for extension & closed for modification principle


*/


//-----------------------------------------------
// door module
//-----------------------------------------------


class Door extends EventEmitter {
    open() {
        console.log("door opened");
        this.emit('open', null, { number: 1, floor: 2 })
    }
    close() {
        console.log("door closed");
        this.emit('close', null, { number: 1, floor: 2 })
    }
}

const door = new Door()


//-----------------------------------------------
// Fan module
//-----------------------------------------------

const fan = {
    setup() {
        door.on('open', (err, data) => {
            if (err) {
                console.log(err)
                return;
            }
            console.log("Fan ON ", data.number, data.floor);
        });

        door.on('close', (err, data) => {
            if (err) {
                console.log(err)
                return;
            }
            console.log("Fan OFF ", data.number, data.floor);
        })
    }
}

fan.setup()

//-----------------------------------------------



//-----------------------------------------------
// AC module
//-----------------------------------------------

const ac = {
    setup() {
        door.on('open', (err, data) => {
            if (err) {
                console.log(err)
                return;
            }
            console.log("Ac ON ", data.number, data.floor);
        });

        door.on('close', (err, data) => {
            if (err) {
                console.log(err)
                return;
            }
            console.log("Ac OFF ", data.number, data.floor);
        })
    }
}

ac.setup()

//-----------------------------------------------


setTimeout(() => {
    door.open();
    setTimeout(() => {
        door.close();
    }, 3000);
}, 3000);