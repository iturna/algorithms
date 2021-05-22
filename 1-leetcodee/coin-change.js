/**
 * https://leetcode.com/problems/coin-change/
 * 
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * 
 * Constraints:

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
 */
debugger
var coinChange = function(coins, amount) {
  coins.sort((a, b) => b - a);
  let result = coinChangeHelper(coins, amount, {});
  return result === Infinity?-1 : result; 
};

function coinChangeHelper(coins, amount, mem) {
  if(amount===0) {
    return 0;
  } 

  if(amount<0) return Infinity;
  
  let minCount = Infinity;
  let index = 0;

  let key = amount;
  if(mem[key]) return mem[key];

  while(index<coins.length) {
    minCount = Math.min(minCount, coinChangeHelper(coins, amount-coins[index], mem)); 
    index++;
    mem[key]=minCount + 1;
  }

  return mem[key]
}

coinChange([186,419,83,408], 6249);