/*
4 4 4 4
3 3 3 
2 2
1

*/
function reverseNum(n) {
    for (let i = n; i >= 1; i--) {
        let s = `   `
        for (let j = 1; j <= i; j++) {
            s = `${i}    ${s} `
        }
        console.log(s)
    }
}

reverseNum(6)