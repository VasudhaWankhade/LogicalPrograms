//       *
//     * *
//   * * *
// * * * *


for (let i = 1; i <= 4; i++) {
    let s = ''
    for (let j = 4; j >= 1; j--) {
        if (j > i) {
            s = s + '  '
        } else {
            s = s + '* '
        }
    }
    console.log(s)
}