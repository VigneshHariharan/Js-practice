// call, apply, bind polyfill

// call - call from the given this method
// if not given, take from this;
function ourCall(context, ...args) {
    console.log(context, args, this);
    // need to call the function from context object, this will refer to the function here
    context._this = this;
    context._this(...args)
};

function ourApply(context, args) {
    // same as call but args taken as array;
    context._this = this;
    context._this(...args);
};

function ourBind(context, ...argsBeforeExec) {

    let closureThis = this;
    console.log('cl', closureThis)
    // can use call instead of this
    // context._this = this;
    // return value is a function when executed it should call from the given context set;
    return function (...argsAfterExec) {
        // context._this(...argsBeforeExec, ...argsAfterExec)
        closureThis.call(context, ...argsBeforeExec, ...argsAfterExec)
    }
}

const obj1 = {
    name: 'Vignesh',
    logName: function () {
        console.log("Name : ", this.name);
    },
    logNameAndGivenValue: function (...values) {
        console.log("name and value", this.name, ...values)
    }
};

const obj2 = {
    name: 'Hariharan'
};

Function.prototype.ourCall = ourCall;
Function.prototype.ourApply = ourApply;
Function.prototype.ourBind = ourBind;

// test
// obj1.logNameAndGivenValue.call(obj2, 'gret', 'viv');
// obj1.logNameAndGivenValue.ourCall(obj2, 'gret', 'viv');
const method3 = obj1.logNameAndGivenValue.ourBind(obj2, ['gret', 'viv']);
const method4 = obj1.logNameAndGivenValue.bind(obj2, ['gret', 'viv']);



const obj3 = {
    name: "Robin",
    method3,
    method4
}

obj3.method3("Greater")
obj3.method4("Lesser")
