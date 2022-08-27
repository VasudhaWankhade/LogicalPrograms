//  0 1 1 2 3 5 8

function fibo(num) {
    let a = 0;
    b = 1
    for (let i = 1; i <= num; i++) {
        console.log(a) ///0
        let sum = a + b //1 
        b = a
        a = sum
    }
}

fibo(10)