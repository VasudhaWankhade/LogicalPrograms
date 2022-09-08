// count which number appeared how many times

let arrOne = [1, 2, 2, 3, 1, 1, 1, 2, 2, 3, 7, 7, 7, 7]

// let unique = new Map() // stores elements in the form of key and value

// for (let i = 0; i < arr.length; i++) {
//     unique.set(arr[i], 0)
// }
// for (let i = 0; i < arr.length; i++) {
//     let val = unique.get(arr[i])
//     val++
//     unique.set(arr[i], val)
// }
// console.log(unique)

// function
// first way
function countNum(arr) {
    let unique = new Map() // stores elements in the form of key and value

    for (let i = 0; i < arr.length; i++) {
        unique.set(arr[i], 0)
    }
    for (let i = 0; i < arr.length; i++) {
        let val = unique.get(arr[i])
        val++
        unique.set(arr[i], val)
    }
    console.log(unique)
}
countNum(arrOne)

// second way ==> not solved

// let arrTwo = [1, 2, 2, 2, 2, 4, 4, 5, 5, 5]
// let obj = {}
// let uniq = []
// for (let i = 0; i < arrTwo.length; i++) {
//     let count = 0
//     if (!uniq.includes(arrTwo[i])) {
//         uniq.push(arrTwo[i])
//     } else {
//         count++
//         obj.arrTwo[i] = count
//     }
// }
// console.log(uniq)
// console.log(obj)