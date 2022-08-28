/*
a
b c
d e f
g h i j
k l m n o
p q r s t u
v w x y z

*/

// maximum rows possible = 6
function patternTwo(rows) {
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let k = 0

    for (let i = 0; i < rows; i++) {
        let s = ''
        for (let j = 0; j <= i; j++) {
            s = s + alphabets[k] + ' '
            k++
        }
        console.log(s)
    }
}

patternTwo(6)