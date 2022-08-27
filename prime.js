function checkPrime(num) {
    if (num != 1 && num != 0) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                console.log("Not prime")
                break
            } else {
                console.log("Prime")
                break
            }
        }
    } else {
        let a = num == 0 ? `${num} is not prime number` : `${num} is not prime nor composite number`
        console.log(a)
    }

}

// checkPrime(0)