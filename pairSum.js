//Find pairs of elements in array with sum equal to k

// let array = [3, 2, 6, 3, 7, 0]
// let k = 9

// for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//         array[i] + array[j] == k ? console.log([array[i], array[j]]) : null
//     }
// }

// function

function findPair(array, k) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            array[i] + array[j] == k ? console.log([array[i], array[j]]) : null
        }
    }
}

findPair([1, 2, 3, 23, 43, 7, 91, 4], 10)