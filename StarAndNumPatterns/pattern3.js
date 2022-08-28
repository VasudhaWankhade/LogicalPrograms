/*
1
2 2
3 3 3
4 4 4 4

*/

for (let i = 1; i <= 4; i++) {
    let s = ` `
    for (let j = 1; j <= i; j++) {
        s = `${i} ${s}`
    }
    console.log(s)
}