// https://www.hackerrank.com/challenges/two-characters/problem
// Complete the alternate function below.
debugger
function alternate(s) {
  s = s.split('');
  let map = s.reduce(function(agg, val, index) {
    if(agg.has(val)) {agg.get(val).push(index);}
    else {agg.set(val, [index]);}
    return agg;
  }, new Map());

  let arr = Array.from(map);
  arr.sort((a, b) => b[1].length-a[1].length);

  console.log(arr);

  let max = 0;
  for(let i=0; i<arr.length-1; i++) {
    for(let j=i+1; j<arr.length; j++) {
      if(validate(arr[i][0], arr[j][0], s)) {
        console.log(arr[i][0], arr[j][0]);
        max = Math.max(max, arr[i][1].length + arr[j][1].length);
      }
    }
  }

  return max;
}

function validate(char1, char2, s) {
  let prev = null;
  for(let i=0; i<s.length; i++) {
    let char = s[i];
    if(char===char1 || char===char2) {
      if(prev === char) {
        return false;
      }
    } else {
      continue;
    }
    prev = s[i];
  }
  return true;
}

// alternate('beabeefeab');
// alternate('a');
alternate('muqqzbcjmyknwlmlcfqjujabwtekovkwsfjrwmswqfurtpahkdyqdttizqbkrsmfpxchbjrbvcunogcvragjxivasdykamtkinxpgasmwz')
