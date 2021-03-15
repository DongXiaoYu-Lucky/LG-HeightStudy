// 纯函数和不纯的函数
// slice /splice

let array = [1,2,3,4,5,6]

// 相同的输入对应相同的输出-纯函数
console.log(array.slice(0, 3));
console.log(array.slice(0, 3));
console.log(array.slice(0, 3));


// 相同的输入对应不同的输出-不纯函数
console.log(array.splice(0, 3));
console.log(array.splice(0, 3));
console.log(array.splice(0, 3));

// 纯函数
function getSum(a, b) {
    return a + b;
}
console.log(getSum(1, 2));
console.log(getSum(1, 2));
console.log(getSum(1, 2));