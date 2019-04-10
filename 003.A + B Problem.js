/**
 * 003.A + B Problem
 * Write a function that add two numbers A and B. You should not use + or any arithmetic operators.
 * 
 * Example:
 * Given a=1 and b=2 return 3
 */
const aplusb = function (a, b) {
    var sum = a ^ b;
    var ca = (a & b) << 1;
    if (ca == 0) {
        return sum;
    }
    return aplusb(sum, ca);
}

console.log(aplusb(5,10));