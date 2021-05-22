// Complete the luckBalance function below.
// https://www.hackerrank.com/challenges/luck-balance/problem
function luckBalance(k, contests) {
  
  let normalArray = contests.filter((a)=>a[1]===0);
  let importantArray = contests.filter((a)=>a[1]===1).sort((a,b)=>b[0]-a[0]).slice();
  // console.log(normalArray, importantArray);

  let sumLoses = importantArray.slice(0, k).reduce((agg, v) => agg+v[0],0);
  let sumWin = importantArray.slice(k).reduce((agg,v)=>agg+v[0],0);
  let sumNormal = normalArray.reduce((agg,v)=>agg+v[0],0);

  return sumLoses+sumNormal-sumWin;
}

luckBalance(3, [[5,1],[2,1],[1,1],[8,1],[10,0],[5,0]]);