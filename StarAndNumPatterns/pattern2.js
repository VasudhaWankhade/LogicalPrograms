/*

* * * *
* * *
* *
*

*/
function reverseStars(n) {
    for (let i = 1; i <= n; i++) {
        let s = ''
        for (let j = n; j >= i; j--) {
            s += '* '
        }
        console.log(s)
    }
}

reverseStars(10)