function permutator(inputArr) {
  var results = [];

  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}


permutator([5, 3, 7, 1]);


----------------------------------

/**
 * @param {string} s
 * @return {string[][]}
 
 abc
 a,b,c
 ab,c
 a,bc
 
 */
    const ans = [];

    
    const permutation = function(curr, index) {
      if(index===s.length) {
        ans.push([...curr]);
        return;
      }
      
      for(let i=index; i<s.length; i++) {
        if(isPalindrome(s.slice(index, i+1))) {
          curr.push(s.slice(index, i+1));
          permutation(curr, i+1);
          curr.pop();
        }
      }
    }
    
    permutation([], 0);
    
    return ans;


