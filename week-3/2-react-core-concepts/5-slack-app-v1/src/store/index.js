
const state = {
    channels: [
        "channel-1",
        "channel-2",
        "channel-3"
    ],
    messages: {
        'channel-1': [
            "message-1",
            "message-2",
        ],
        'channel-2': [
            "message-1",
            "message-2",
            "message-3",
        ],
        "channel-3": []
    }
}


const subscribers = []

const store = {
    getState() {
        return state;
    },
    subscribe: function (callback) {
        subscribers.push(callback)
        let idx = subscribers.length - 1;
        return () => {
            subscribers.splice(idx, 1)
        }
    }
}




let j = 3;
setInterval(() => {
    j++;
    let channel = `channel-${j}`
    state.channels.push(channel) // state change...
    subscribers.forEach(callback => {
        callback()
    })
}, 10 * 1000)



let i = 0;
setInterval(() => {
    i++;
    let message = `message-${i}`
    state.messages['channel-3'].push(message) // state change...
    // console.log("store notifying all subscribers");
    subscribers.forEach(callback => {
        callback()
    })
}, 5000)


export default store;