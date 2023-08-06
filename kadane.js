// // const arr = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];

// const arr = [3, 4, -6, 7, 8];

// function listAllPossibleSubArrays(array) {
//     let subArrs = [];
//     for (let i = 0; i < array.length; i++) {
//         for (let k = i + 1; k <= array.length; k++) {
//             // console.log('sf', i, k)
//             subArrs.push(array.slice(i, k))
//         }
//         // for (let k = i; k < array.length; k++) {
//         //     // subArrs.push(array.slice(i, k))
//         //     for (let j = k; j <= i; j++) {
//         //         subArrs.push(array[j])
//         //     }
//         // }
//     };
//     // console.log('su', subArrs)

//     let allArrs = [];

//     // return subArrs
//     const subArrayLengths = subArrs.map((arr) => {
//         let result = 0;
//         arr.forEach((item) => {
//             result += item;
//         });
//         allArrs.push(arr);
//         return result
//     })

//     let selectSub = [];

//     const maxSum = subArrayLengths.reduce((result, num, index) => {
//         if (num > result) {
//             selectSub = allArrs[index]
//             return num
//         }
//         return result;
//     }, 0)
//     return `max Sum is ${maxSum}, totalSubArry comb is ${subArrayLengths
//         .length}, the sub arr is ${selectSub}`;
// };

// const subArr = listAllPossibleSubArrays(arr);
// console.log(subArr)

// function kadaneAlgorithm(array) {
//     let maxNumEndingHere = array[0];
//     let maxNumUntil = array[0];
//     for (let index = 1; index < array.length; index++) {
//         const num = array[index];
//         maxNumEndingHere = Math.max(num, num + maxNumEndingHere);
//         maxNumUntil = Math.max(maxNumUntil, maxNumEndingHere)
//     }
//     return `max number is ${maxNumUntil}`
// }

// const subArr2 = kadaneAlgorithm(arr);

// console.log('kadaneAlgorithm', subArr2);



















const arr = [3, 4, -6, 7, 8];
for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {

        console.log(arr[i], arr[k], arr.slice(i))

    }
}