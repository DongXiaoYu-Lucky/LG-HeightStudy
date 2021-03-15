// 记忆函数

function getArea(r) {
    console.log(r);
    return Math.PI * r* r
}

function memoize(fn) {
    let cache = {}
    return function () {
        let key = JSON.stringify(arguments);
        cache[key] = cache[key] || fn.apply(fn, arguments)
        return cache[key]
    }
}

let getAreaWith = memoize(getArea)

console.log(getAreaWith(4));
console.log(getAreaWith(4));
console.log(getAreaWith(4));
