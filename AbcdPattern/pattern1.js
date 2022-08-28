/*

a
b b
c c c
d d d d

*/

let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


function patternOne(rows) {
    for (let i = 0; i < rows; i++) {
        let s = ''
        for (let j = 0; j <= i; j++) {
            s = s + alphabets[i] + " "
        }
        console.log(s)
    }
}
patternOne(10)