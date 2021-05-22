/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 * 
 * Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
 */
var maxProfit = function(prices) {
    if(prices.length<2) return 0;

    let min=prices[0];
    let diff=0;

    for(let i=1; i<prices.length; i++){
      if(prices[i]<min) {
        min = prices[i];
      } else if (prices[i]>min) {
        diff=Math.max(diff, prices[i]-min);
      } 
    }

    return diff;
};

maxProfit([7,1,5,3,6,4]);