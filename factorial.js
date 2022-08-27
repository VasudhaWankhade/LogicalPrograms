// First Way

function factorial(num) {
    let fact = 1
    for (let i = num; i > 0; i--) {
        fact = fact * i
    }
    console.log(fact)
}

factorial(4)

// Second Way

function recur(n) {
    if (n <= 1) {
        return n
    }
    return n * recur(n - 1) //120

}