// Filter out numbers from given string

let strOne = 'adsd677dad892dm99@#$%0'
    // let num = ''

// for (let i = 0; i < str.length; i++) {
//     if (Number(str[i]) || str[i] == 0) {
//         num += str[i]
//     }
// }
// console.log(num)

// function

function filter_numbers(str) {
    let num = ''
    for (let i = 0; i < str.length; i++) {
        if (Number(str[i]) || str[i] == 0) {
            num += str[i]
        }
    }
    console.log(num)
}
filter_numbers(strOne)
let strTwo = '12mdsjk&&&kk3435kekr'
filter_numbers(strTwo)