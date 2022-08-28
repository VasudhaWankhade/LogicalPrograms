/*
a
a b 
a b c
a b c d
*/

function pattern3(n) {
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    for (let i = 0; i < n; i++) {
        let s = ''
        for (let j = 0; j <= i; j++) {
            s = s + alphabets[j] + ' '
        }
        console.log(s)
    }
}

pattern3(5)