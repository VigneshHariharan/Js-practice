function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function (type, callback) {
   if(this.events[type]) {
        this.events[type].push(callback);
   } else {
        this.events[type] = [callback]
   }
};

Emitter.prototype.emit = function(type) {
    if(this.events[type]) {
        this.events[type].forEach((cb) => cb())
    }
}

const eventExample = new Emitter();
eventExample.on('groot', () => {
    console.log('groot')
})

eventExample.emit('groot')
eventExample.emit("groot");
eventExample.emit("groot");
