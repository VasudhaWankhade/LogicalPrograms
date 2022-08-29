//* * * *
//  * * *
//    * *
//      *
// 1 = 4
// 2 = 3  n-k

let k = 0
for (let i = 1; i <= 4; i++) {
    let s = ' '
    for (let j = 4; j >= 1; j--) {
        if (j <= 4 - k) {
            s = s + '* '
        } else {
            s = '  ' + s
        }
    }
    console.log(s)
    k++
}