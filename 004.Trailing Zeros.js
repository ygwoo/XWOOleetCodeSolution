/**
 * 004.Trailing Zeros
 * 
 * Write an algorithm which computes the number of trailing zeros in n factorial.
 * 
 * Example:
 * 11! = 39916800, so the out should be 2
 */
const trailingZeros = function (n) {
    var num = 0;

    while (n != 0) {
        num += Math.floor(n / 5);
        n = Math.floor(n / 5);
    }
    return num;
}

function factorial(fac) {
    if (fac <= 1) {
        return fac;
    } else {
        return fac * arguments.callee(fac - 1);
    }
}

console.log(trailingZeros(20));
console.log(factorial(20));