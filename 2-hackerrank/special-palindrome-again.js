// Complete the substrCount function below.
// https://www.hackerrank.com/challenges/special-palindrome-again/problem
debugger
function substrCount(n, s) {
  let count = 0;
  let visit = new Set();
  for(let i=0; i<s.length; i++) {
    count += substrHelper(s, i, i, visit) + substrHelper(s, i, i+1, visit);
  }
  return count;
}

function substrHelper(s, left, right, visit) {

  let val1 = s[left];
  let val2 = s[right];
  let dup = new Set();
  let lastChar = '';
  let count = 0;

  while(val1 && val2) {
    let key = left + '-' + right;
    if(visit.has(key)) return 0;
    else visit.add(key);
    if(val1 === val2) {
      if(right-left===1 || right-left===2) lastChar = val1;
      if(left!==right && lastChar!==val1) break;
      count++;
      // console.log(s.substring(left, right + 1))
    }
    else {
      return count;
    }
    // console.log(visit, count);
    left--;
    right++; 
    // console.log(val1, val2, count);
    val1 = s[left];
    val2 = s[right];
  }
  return count;
}

function test() {
  return substrCount(1, 'abcbaba') === 10
  && substrCount(1, 'aaaa') === 10
  && substrCount(1, 'asasd') === 7
}

test();


// substrCount(1, 'asasd')