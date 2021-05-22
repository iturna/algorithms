function stockmax(prices) {
  // Write your code here
  prices.push(0);
  let maxIndex = findMax(prices, 0);
  let index = 0;
  let profit = 0;

  
  while(maxIndex >= 0) {
    let sum = 0;
    let count = 0;
    
    while(index<=maxIndex) {
      if(index < maxIndex) {
        sum += prices[index];
        count++;
      } else if(index === maxIndex) {
        profit += count*prices[index] - sum;
      }

      index++;
    }

    maxIndex = findMax(prices, index);
  }

  return profit;

}

function findMax(prices, index) {
  let max = Number.MIN_SAFE_INTEGER;
  let maxIndex = -1;

  for(let i=index; i<prices.length; i++) {
    let price = prices[i];

    if(price > max) {
      max = price;
      maxIndex = i;
    }
  }

  return maxIndex;
}