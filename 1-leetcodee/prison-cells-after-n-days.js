/**
 * https://leetcode.com/problems/prison-cells-after-n-days/
 * 
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, n, initial=true) {
  n = n%14;
  // console.log(n);
  if(initial && n===0) n=14;
  else if(n===0) return cells;
  
  let newCells = [0,0,0,0,0,0,0,0];

  for(let i=1; i<cells.length-1; i++) {
    if(cells[i-1]===cells[i+1]) newCells[i]=1;
  }

  return prisonAfterNDays(newCells, --n, false);
};

// prisonAfterNDays([0, 1, 0, 1, 1, 0, 0, 1], 17);
prisonAfterNDays([1,1,0,1,1,0,0,1], 300663720); //[0,0,1,0,0,1,1,0]
// 300663720%14

