
//https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
debugger

  let map = {};

  // s = s.split('');

  let step = 1;
  let index = 0; 
  let count = 0;

  while(step < s.length) {
    while(index < s.length - step + 1) {
      let key = sort(s.substr(index, step));
      if(map[key]) {count+=map[key]; map[key]++; }
      else map[key] = 1;
      // console.log(key, index)
      index++;
    }
    step++;
    index = 0;
  }
  return count;
}

function sort(s) {
  return s.split('').sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0)).join('');
}


//sherlockAndAnagrams('kkkk');
 sherlockAndAnagrams('ifailuhkqq');
// reverseString('test');