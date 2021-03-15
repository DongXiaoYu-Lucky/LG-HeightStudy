// // 高阶函数-函数作为参数
// function foreach (array, fn) {
//     for (let i = 0; i < array.length; i++) {
//         fn(array[i]);
//     }
// }

// // // // 测试
// // foreach(arr, (item) => {
// //     console.log(item);
// // })

// // filter
// function filter(array, fn) {
//     let res = [];
//     for (let i = 0; i < array.length; i++) {
//         if (fn(array[i])) {
//             res.push(array[i])
//         }
//     }
//     return res;
// }


// // 测试
// let r = filter(arr, (item) => {
//     return item % 2 === 0
// })

// console.log(r);


// 高阶函数-函数作为返回值
function makeFn () {
    let msg = 'hello function'
    return function () {
        console.log(msg)
    }
}

const fn = makeFn();
fn();

makeFn()();

// once
// 对一个函数只执行一次

// function once(fn) {
//     let done = false;
//     return function () {

//     console.log(this, 222);
//         if (!done) {
//             done = true;
//             return fn.apply(this, arguments)
//         }
//     }
// }

// let pay = once(function (money) {
//     console.log(`支付了￥${money}`);
// })

// pay(4)
// pay(4)
// pay(4)
// pay(4)

// const obj = {
//     name: 'test',
//     fn: function (a, b) {
//         console.log(a+b);
//     }
// }

// let b = obj.fn

// b.apply(obj, [1,2])


// 模拟常用高阶函数 map every some
let arr = [1,3,4,7,8];
// map
function map(array, fn) {
    let newA = []
    for (const value of array) {
        newA.push(fn(value));
    }
    // for (let i = 0; i < array.length; i++) {
    //     newA.push(fn(array[i]));
    // }
    return newA;
}
let newArray = map(arr, (item) => {
    return item * item
})
console.log(newArray);

// every
function every(array, fn) {
    let count = 0
    for (const value of array) {
        if(fn(value)) {
            count += 1
        };
    }
    // for (let i = 0; i < array.length; i++) {
    //     if(fn(array[i])) {
    //         count += 1
    //     };
    // }
    if (count === array.length) {
        return true;
    } else {
        return false;
    }
}

// every
function every(array, fn) {
    for (const value of array) {
        if (!fn(value)) {
            return false;
        }
    }
    return true
}
// let res = every(arr, (item) => {
//     return item > 0;
// })

// some
function some(array, fn) {
    for (const value of array) {
        if (fn(value)) {
            return true;
        }
    }
    return false;
    
}

let res = some(arr, (item) => {
    return item > 10;
})
console.log(res);