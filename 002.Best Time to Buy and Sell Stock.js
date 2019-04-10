/**
 * 002.Best Time to Buy and Sell Stock-121
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 * 
 * Example 1:
 * Input: [7, 1, 5, 3, 6, 4]
 * Output: 5
 * max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
 * 
 * Example 2:
 * Input: [7, 6, 4, 3, 1]
 * Output: 0
 * In this case, no transaction is done, i.e. max profit = 0.
 */

var maxProfit = function (prices) {
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
    maxPrice = Math.max.apply(Math, difArr) == "-Infinity" ? 0 : Math.max.apply(Math, difArr);
    return maxPrice;
};

var inputStock = [22, 1, 2, 3, 4, 5, 12, 0, 1, 1, 1, 2, 3, 4, 5, 6];
console.log(maxProfit(inputStock));