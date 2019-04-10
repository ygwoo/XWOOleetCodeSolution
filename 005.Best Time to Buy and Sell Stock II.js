/**
 * 005.Best Time to Buy and Sell Stock II-122
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). 
 * However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
 */

var maxProfit = function (prices) {
    var arr = new Array();
    arr.push(maxIncrement(prices));
    return arr;
};

function maxIncrement(prices) {
    var index = 0;
    var difArr = new Array();
    var minPrice = Number.MAX_SAFE_INTEGER,
        maxPrice = 0;

    for (var i = 0; i < prices.length; i++) {
        if (minPrice >= prices[i]) {
            minPrice = prices[i];
        } else {
            difArr.push(Math.max(maxPrice, prices[i] - minPrice));
        }
    }
    //console.log(difArr + "||" + index);
    maxPrice = Math.max.apply(Math, difArr) == "-Infinity" ? 0 : Math.max.apply(Math, difArr);
    index = difArr.indexOf(maxPrice) + 1;
    console.log(difArr);
    console.log(index);
    newPric = prices.splice(0, difArr.indexOf(maxPrice) + 1);
    return maxPrice;
};
var newPric = [7, 1, 3, 6, 4, 5, 1, 2, 3, 4];
console.log(maxProfit(newPric));