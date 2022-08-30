//       0   1    2   3   4   5
let a = [11, 12, 13, 14, 15]
    /*    [16, 15, 14, 13, 12, 11]
        a[0] = a[6]
        formula ==> a[index] = a[n-index +1]
        
    */
    // First Way 

let len = a.length

for (let i = 0; i < len / 2; i++) {
    let temp = a[i]
    a[i] = a[len - i - 1]
    a[len - i - 1] = temp
}
console.log(a)

// Second Way

for (let i = 0; i < len / 2; i++) {
    [a[i], a[len - i - 1]] = [a[len - i - 1], a[i]]
}
console.log(a)





// a1 = 10
// b1 = 20
//     // swap
// let temp = 0;
// [a1, b1] = [b1, a1]
// console.log(a1)
// console.log(b1)