// 纯 有硬编码 可以通过柯里化解决
// function checkAge(age) {
//     let mini = 10
//     return age >= mini
// }

// 柯里化演示
// function checkAge(mini) {
//     return function (age) {
//         return age >= mini
//     }
// }


// es6语法
let checkAge = (min) => (age => age >= min)


const checkAge1 = checkAge(18)
const checkAge2 = checkAge(22)

console.log(checkAge(18, 20));
console.log(checkAge1(20), 'checkAge1');
console.log(checkAge(18, 24));
console.log(checkAge1(24), 'checkAge1');
console.log(checkAge(22, 20));
console.log(checkAge2(20), 'checkAge2');

