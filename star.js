// First

/*

* 
* *
* * *
* * * *

 */

// for (let i = 1; i <= 4; i++) {
//     let s = ''
//     let j = 1
//     while (j <= i) {
//         s += '* '
//         j++
//     }
//     console.log(s)
// }

// // Second

// /*

// * * * *
// * * *
// * *
// *

// */

// for (let i = 4; i >= 1; i--) {
//     let s = ''
//     let j = i
//     while (j > 0) {
//         s += '* '
//         j--
//     }
//     console.log(s)
// }

// Third

/*
1
2 2
3 3 3
4 4 4 4
*/

// for (let i = 1; i <= 4; i++) {
//     let q = ``
//     let s = 1
//     while (s <= i) {
//         q += `${i} `
//         s++
//     }
//     console.log(q)
// }

// // Fourth

/*
4 4 4 4
3 3 3
2 2
1
*/

// for (let i = 4; i >= 1; i--) {
//     let s = ``
//     let j = 1
//     while (j <= i) {
//         // console.log(i)
//         s += `${i} `
//             // console.log(s)
//         j++
//     }
//     console.log(s)
// }


// Fourth

//       *
//     * *
//   * * *
// * * * *

for (let i = 4; i >= 1; i--) {
    let s = ''
    for (let j = 1; j <= 4; j++) { // 4
        if (j >= i) {
            s = s + '*'
        } else {
            s += ' '
        }
    }
    console.log(s)
}

function matrix(n) {
    for (let i = n; i >= 1; i--) {
        let s = ''
        for (let j = 1; j <= n; j++) {
            if (j >= i) {
                s = s + '* '
            } else {
                s += ' '
            }
        }
        console.log(s)
    }
}

matrix(4)


// Pyramid