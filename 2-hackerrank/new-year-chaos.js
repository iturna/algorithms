// Complete the minimumBribes function below.
// https://www.hackerrank.com/challenges/new-year-chaos/problem
function minimumBribes(q) {
  if(!q) return 0;
  if(!q.length) return 0;
  let bribeCount=0;

  for(let i = q.length-1; i>=0; i--) {
    if(i+1 === q[i]) {
      //case 0 
      //nothing to do, just continue
    } else if(i+1 === q[i-2]) { //case 1 (number 2 ahead)
      swap(q, i-2, i-1);
      swap(q, i-1, i);
      bribeCount += 2;
    } else if (i+1 === q[i-1]) { //case 2 (number 1 ahead)
      swap(q, i-1, i);
      bribeCount++;
    } else { return "Too chaotic"; }
  }

  return bribeCount;
}

function swap(q, firstIndex, secondIndex) {
  [q[firstIndex], q[secondIndex]] = [q[secondIndex], q[firstIndex]];
}


//  minimumBribes([2,1,5,3,4]);
// minimumBribes([2,5,1,3,4]);
// minimumBribes([1,2, 5, 3, 7, 8, 6, 4]);
// minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]);
minimumBribes([1,2,5,3,4,7,8,6]);
