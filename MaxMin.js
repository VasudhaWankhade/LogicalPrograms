// Find maximum and minimum number in array

let array1 = [1, 2, 3, 4, 5, -5, 100, 200, -1000]

// Maximum number in array

function MaxInArray(array) {
    let max = array[0]
    for (let i = 1; i < array.length; i++) {
        max < array[i] ? max = array[i] : max = max
    }
    console.log(max)
}
MaxInArray(array1)

// Minimum number in array

function MinInArray(array) {
    let min = array[0]
    for (let i = 1; i < array.length; i++) {
        min > array[i] ? min = array[i] : min = min
    }
    console.log(min)
}
MinInArray(array1)

// Combine function to find maximum and minimum number in array

function MaxAndMinInArray(array) {
    let max = array[0]
    let min = array[0]
    let i = 1
    while (i < array.length) {
        max < array[i] ? max = array[i] : min = array[i]
        i++
    }
    console.log(`Maximum number is ${max} and Minimum number is ${min}`)
}
MaxAndMinInArray(array1)