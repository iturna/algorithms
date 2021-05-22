/**
 * https://leetcode.com/problems/container-with-most-water/
 * 
 * @param {number[]} height
 * @return {number}
 */
debugger
var maxArea = function(height) {
  let max = 0; 
  let i = 0;
  let j = height.length - 1;

  while(i<j) {
    let min = Math.min(height[i], height[j]);
    max = Math.max(max, min*(j-i));

    if(height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return max;
}


var maxArea2 = function(height) {
  let len = height.length;
  let max = 0; 

  for(let i=0; i<len-1; i++) {
    for(let j=i+1; j<len; j++) {
      let minHeight = Math.min(height[i], height[j]);
      max = Math.max(max, minHeight*(j-i));
    }
  }

  return max;
};

maxArea([1,8,6,2,5,4,8,3,7]);
// maxArea([4,3,2,1,4]);