function prime(n) {
    let c = 0
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            c = 1
            break
        }
    }
    if (c == 1) {
        // console.log('NO')
        return false
    } else {
        // console.log('Yes')
        return true
    }


}

let a = prime(356587)
console.log(a)