
function debounce(callback, delay, immediate = false) {
    // Write your code here.

    let isLastTimeoutCleared = true;
    let isImmediateCall = immediate;

    return (...args) => {
        if (isLastTimeoutCleared || isImmediateCall) {
            setTimeout(() => {
                callback(...args);
                isLastTimeoutCleared = true;
            }, delay);
            if (isImmediateCall) {
                isImmediateCall = false
            }
            isLastTimeoutCleared = false
        }

    }
};

const logger = (a) => {
    console.log("logger callled ", a)
};

const debouncedLogger = debounce(logger, 1000, false);


// setInterval(() => {
//     debouncedLogger(Math.random() * 100)
//     // logger(Math.random() * 100)
// }, 12)
