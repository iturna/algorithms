// Complete the weightedUniformStrings function below.
//https://www.hackerrank.com/challenges/weighted-uniform-string/problem
function weightedUniformStrings(s, queries) {

  let cache = new Set();
  let prev = 0;
  let numToAdd = 0;

  for(let i=0; i<s.length; i++) {
    let num = s[i].charCodeAt(0)-96;
    if(prev === num) numToAdd += prev;
    else numToAdd = num;
    cache.add(numToAdd);
    prev = num;
  }

  for(let i=0; i<queries.length; i++) {
    let query = queries[i];
    if(cache.has(query)) queries[i] = 'Yes'; 
    else queries[i] = 'No';
  }

  console.log(cache);

  return queries;
}

weightedUniformStrings('aaavavvddfdf', [ 1, 3, 12, 5, 9, 10 ]);