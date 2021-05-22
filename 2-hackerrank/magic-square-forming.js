// Complete the formingMagicSquare function below.
// https://www.hackerrank.com/challenges/magic-square-forming/

debugger
function formingMagicSquare(s) {
  // [[5, 3, 4], [1, 5, 8], [6, 4, 2]]
  let array = return15Sums();
  let magicArray = buildMagicSquares(array);
  
  let min = Number.MAX_SAFE_INTEGER;
  for(let currMagicArray of magicArray) {
    let sum = 0;
    for(let i=0; i<currMagicArray.length; i++) {
      for(let j=0; j<currMagicArray[i].length; j++) {
        sum += Math.abs(currMagicArray[i][j]-s[i][j]);
      }
    }
    min = Math.min(sum, min);
  }
  return min;
}

function return15Sums() {
  let map = new Map();
  for(let i=1; i<=9; i++) {
    for(let j=1; j<=9; j++) {
      for(let k=1; k<=9; k++) {
        if(i+j+k===15 && i!==j && j!==k && i!==k) {
          let val = [i, j, k].sort((a, b)=> a-b);
          if(!map.has(val.toString())) {
            map.set(val.toString(), val);
          }
        }
      }
    }
  }

  let ret = [];
  for(let key of map.keys()) {
    // console.log(map.get(key));
    let randGeneratedArray = [];
    trackback(randGeneratedArray, 0, map.get(key), [], {});
    ret.push(...randGeneratedArray);
  }

  return ret;
}

function buildMagicSquares(arrayList) {
  let ret = [];
  let check = [];
  for(let i=0; i<arrayList.length-3; i++) {
    for(let j=0; j<arrayList.length-2; j++) {
      for(let k=0; k<arrayList.length-1; k++) {
        check.push(...arrayList[i], ...arrayList[j], ...arrayList[k]);
        // console.log(arrayList[i]);
        // console.log(check);
        if(arrayList[i][0]+arrayList[j][0]+arrayList[k][0]===15 &&
        arrayList[i][1]+arrayList[j][1]+arrayList[k][1]===15 &&
        arrayList[i][2]+arrayList[j][2]+arrayList[k][2]===15 &&
        arrayList[i][0]+arrayList[j][1]+arrayList[k][2]===15 &&
        arrayList[i][2]+arrayList[j][1]+arrayList[k][0]===15 && 
        (new Set(check)).size===9) {
          ret.push([arrayList[i], arrayList[j], arrayList[k]]);
        }
        check = [];
      }
    }
  }

  return ret;
}

function trackback(ret, index, orjArray, array, visit) {
  if(array.length===orjArray.length) {
    ret.push([...array]);
    visit = {};
    return;
  }
  // for(let i=index; i<orjArray.length && !visit[orjArray[i]]; i++) {
  for(let i=index; i<orjArray.length; i++) {
    if(visit[orjArray[i]]) continue;
    array.push(orjArray[i]);
    visit[orjArray[i]]=1;
    trackback(ret, index, orjArray, array, visit);
    array.pop();
    delete visit[orjArray[i]];
  }
}


// return15Sums();

// formingMagicSquare([[5, 3, 4], [1, 5, 8], [6, 4, 2]]);
// formingMagicSquare([[8, 3, 4], [1, 5, 9], [6, 7, 2]]);
