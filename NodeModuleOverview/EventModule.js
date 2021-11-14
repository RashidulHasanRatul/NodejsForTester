const eventEmitter = require("events");

const emitter = new eventEmitter();



//Register a Listener

emitter.on('Message Logged',function (args) {
    console.log("Listener Called")
    console.log(args.id,args.url);
})

// Raise an Event
emitter.emit("Message Logged",{id:1,url:"http://"});

