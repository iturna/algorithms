// Complete the alternatingCharacters function below.
// https://www.hackerrank.com/challenges/alternating-characters/problem
function alternatingCharacters(s) {
  debugger
  if(s.length < 2) return 0;

  let index = 0;
  s = s.split('');
  let deleteCount = 0;

  while(index+1 < s.length) {
    let char1 = s[index];
    let char2 = s[++index];

    if(char1 === char2) {
      deleteCount++;
    }
  }

  return deleteCount;
} 


alternatingCharacters("AAABBB");