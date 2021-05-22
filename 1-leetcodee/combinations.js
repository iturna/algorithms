/**
 * https://leetcode.com/problems/combinations/
 * 
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
debugger
var combine = function(n, k) {
    let ret = [];
    backtrack(ret, 1, n, k, [], {});
    return ret;
};

function backtrack(ret, start, end, digit, array, visit) {
  if(array.length===digit) {
    ret.push([...array]); 
    visit = {};
    return;
  }

  for(let i=start; i<=end && !visit[i]; i++) {
    array.push(i);
    visit[i]=1;
    backtrack(ret, start+1, end, digit, array, visit);
    array.pop();
    delete visit[i];
  }


  return ret;
}

combine(4, 2);
// combine(1, 1);
// combine(3, 3);
