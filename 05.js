// 柯里化案例
function match(reg, str) {
    return str.match(reg)
}
function sum(a, b, c) {
    return a + b + c;
}

function curry(fn) {
    let args = [].slice.call(fn, arguments)
    let  newArg = [];
    function fnc() {
        newArg = [].concat(newArg, [...arguments]);
        if (newArg.length === args.length) {
            return fn.apply(fn, newArg)
        }
        return fnc
    }
    return fnc
}

// console.log(curry(match)(/^\d$/)('123123'));
console.log(curry(sum)(1)(2)(3));

