const findFibonacciOf = (number) => {


    // if(number === 1) return number;
    const fibIndex = {
        0: 0,
        1: 1,
    }


    for(let i = 2; i <= number; i++) {
        fibIndex[i] = fibIndex[String(i - 1)] + fibIndex[String(i-2)]
    }

    // if(number === 1) {
    //     result += 1;
    //     return result
    // }
    // let result = (number - 1) + (number - 2);
    return fibIndex[number];
}

const inputs = [6,7,8];

for (let input of inputs) {
    console.log(findFibonacciOf(input))
}