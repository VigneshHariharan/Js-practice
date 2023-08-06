// bind polyfill
// bind - returns a func that can called in given this ctx

// call with different a different context and get arguments singly
function ourCall(context, ...args) {
    // context.this(...args)
    console.log("Context : ", context)

    // to change the value of this we need to call a function from respective this object
    context.func = this
    return context.func(...args)
}


Function.prototype.ourCall = ourCall;

function ourBind(context) {
    // function, call it from the given this
    let obj = this;
    return function (...args) {

        console.log("native call", obj)
        obj.call(context, ...args)
        console.log("Our call", obj)
        obj.ourCall(context, ...args)
    }
};

Function.prototype.ourBind = ourBind;

function callArg() {
    console.log("fe")
    console.log("Call Arg called", this.a);
};

const obj1 = {
    a: 1,
    b: 2,
    callArg
};

const obj2 = {
    a: 1000,
    b: 2000,
};

const callArg2 = obj1.callArg.bind(obj2);
const callArg3 = obj1.callArg.ourBind(obj2);

callArg3(33)
// callArg2(22);