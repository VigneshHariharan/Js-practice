// const arr = [3, 4, -6, 7, 8]
// [
// 3, 7, 1, 8, 16, 4,
//     -2, 5, 13, -6, 1, 9,
//     7, 15, 8
// ]
const arr = [
    3, 8, -1, 0, 3, 1, 4, 8, 15, 17, 8, 14,
    17, 18, 13, 17, 5, -4, -3, 0, -2, 1, 5, 12,
    14, 5, 11, 14, 15, 10, 14, -9, -8, -5, -7, -4,
    0, 7, 9, 0, 6, 9, 10, 5, 9, 1, 4, 2,
    5, 9, 16, 18, 9, 15, 18, 19, 14, 18, 3, 1,
    4, 8, 15, 17, 8, 14, 17, 18, 13, 17, -2, 1,
    5, 12, 14, 5, 11, 14, 15, 10, 14, 3, 7, 14,
    16, 7, 13, 16, 17, 12, 16, 4, 11, 13, 4, 10,
    13, 14, 9, 13,]
// Search an element in array using recursion

function findIndexOf(array, number, length) {
    if (length < 0) return -1;
    if (array[length] === number) {
        return length;
    }
    return findIndexOf(array, number, length - 1)
}

const num = findIndexOf(arr, 8, arr.length);

console.log('num : ', num)

















