/*
1
2 3
4 5 6
7 8 9 10
*/
let k = 1
for (let i = 1; i <= 4; i++) {
    let s = ``
    for (let j = 1; j <= i; j++) {
        s = s + k + ' '
        k++
    }
    console.log(s)
}