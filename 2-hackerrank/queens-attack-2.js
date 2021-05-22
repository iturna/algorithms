/*
https://www.hackerrank.com/challenges/queens-attack-2/problem

 * Complete the 'queensAttack' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER r_q
 *  4. INTEGER c_q
 *  5. 2D_INTEGER_ARRAY obstacles
 */
function queensAttack(n, k, r_q, c_q, obstacles) {
  // Write your code here

  let r = r_q;
  let c = c_q;

  let up = 0;
  let down = 1;
  let right = 2;
  let left = 3;
  let upRight = 4;
  let upLeft = 5;
  let downRight = 6;
  let downLeft = 7;

  let fUp = n-r;
  let fDown = r-1;
  let fRight = n-c;
  let fLeft = c-1;

  let arr = [fUp, fDown, fRight, fLeft, Math.min(fUp, fRight), Math.min(fUp, fLeft), Math.min(fDown, fRight), Math.min(fDown, fLeft)];

  for(let pair of obstacles) {
    let pair_r = pair[0];
    let pair_c = pair[1];

    let diffDown = Math.abs(r-pair_r); 
    let diffUp = Math.abs(r-pair_r);
    let diffRight = Math.abs(pair_c-c);
    let diffLeft = Math.abs(pair_c-c);

    if(r === pair_r && c < pair_c) { //right
      arr[right] = Math.min(arr[right], diffRight-1);
    }
    else if(r === pair_r && c > pair_c) { //left
      arr[left] = Math.min(arr[left] , diffLeft-1);
    } 
    else if(c === pair_c && r > pair_r) { //down
      arr[down] = Math.min(arr[down], diffDown-1);
    }
    else if(c === pair_c && r < pair_r) { //up
      arr[up] = Math.min(arr[up], diffUp-1);
    }
    else if(Math.abs(r - pair_r) === Math.abs(c - pair_c) && c > pair_c && r > pair_r) { // downLeft
      arr[downLeft] = Math.min(arr[downLeft], Math.min(diffDown, diffLeft)-1);
    }
    else if(Math.abs(r - pair_r) === Math.abs(c - pair_c) && c < pair_c && r < pair_r) { // upRight
      arr[upRight] = Math.min(arr[upRight], Math.min(diffUp, diffRight)-1);
    }
    else if(Math.abs(r - pair_r) === Math.abs(c - pair_c) && c > pair_c && r < pair_r) { // upLeft
      arr[upLeft] = Math.min(arr[upLeft], Math.min(diffUp, diffLeft)-1);
    }
    else if(Math.abs(r - pair_r) === Math.abs(c - pair_c) && c < pair_c && r > pair_r) { // downRight
      arr[downRight] = Math.min(arr[downRight], Math.min(diffDown, diffRight)-1);
    }
  }


  return arr.reduce(function(agg, val) {agg+=val; return agg;} , 0);
}






// queensAttack(5, 3, 4, 3, [ [ 5, 5 ], [ 4, 2 ], [ 2, 3 ] ]); //10

// queensAttack(100000, 0, 4187, 5068, []) //308369

// queensAttack(88587, 9, 20001, 20003, [[20001, 20002],[20001, 20004],[20000, 20003],[20002, 20003],[20000, 20004],[20000, 20002],[20002, 20004],[20002, 20002]]);