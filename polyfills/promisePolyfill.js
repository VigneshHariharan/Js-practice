// promise polyfill

/**
 * 
 * Promise constructor
 * then, catch, finally
 * resolve, reject
 * 
 *  */

class PromisePolyfill {
    constructor (mainFunction) {
        this.mainFunction = mainFunction;
        mainFunction();
    }

    then (callback) {
        callback();
    }

    catch(callback) {
        callback()
    }

    finally(callback) {
        callback();
    }
}

const promise = new PromisePolyfill();
promise.






const ciCalc = (number, years, percentage) => {
    
    let salary = number;
    for(let i = 0; i < years; i++) {
        percentageIncrease = salary * (percentage / 100);
        salary = salary + percentageIncrease
        console.log(`salary in ${i}`,salary)
    }

    console.log(`${years} years after salary : `,salary)
}

ciCalc(145000 , 5, )