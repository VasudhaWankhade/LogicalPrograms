// filter out alphabets from given string

let strOne = '12sdnchd%%&&*(hsj'
    // let alphabets = ''

// for (let i = 0; i < strOne.length; i++) {
//     if ((strOne[i] < 'z' && strOne[i] > 'a') || (strOne[i] < 'Z' && strOne[i] > 'A')) {
//         alphabets += strOne[i]
//     }
// }
// console.log(alphabets)

// function

function filter_alphabets(str) {
    let alphabets = ''

    for (let i = 0; i < str.length; i++) {
        if ((str[i] < 'z' && str[i] > 'a') || (str[i] < 'Z' && str[i] > 'A')) {
            alphabets += str[i]
        }
    }
    console.log(alphabets)

}
filter_alphabets(strOne)