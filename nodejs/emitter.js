const EventEmitter = require('events');

const her = "here";



const emitter = new EventEmitter();

emitter.on('try-emit', (args) => {
    console.log('args in try-emit 1',args)
});

emitter.on("try-emit", (args) => {
  console.log("args in try-emit 2", args);
});

emitter.emit('try-emit',"Arugment")