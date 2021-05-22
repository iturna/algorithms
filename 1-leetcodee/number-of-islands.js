// https://leetcode.com/problems/number-of-islands/submissions/

/**
 * @param {character[][]} grid
 * @return {number}
 */
debugger
var numIslands = function(grid) {

  if(!grid || !grid.length) return 0;

  let numberOfIslands = 0;

  for(let i=0; i<grid.length; i++) {
    for(let j=0; j<grid[i].length; j++) {
      if(grid[i][j]==="0") continue; //don't interested 0 

      //we found an island, walk through the island
      numberOfIslands += dfs(grid, i, j);
    }
  }
        
  return numberOfIslands;        
};

function dfs(grid, i, j) {
  if(i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j]==="0" ) {
    return 0;
  }

  grid[i][j] = "0";
  dfs(grid, i+1, j);
  dfs(grid, i, j+1);
  dfs(grid, i-1, j);
  dfs(grid, i, j-1);
  return 1;
}

var grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","1","0"]
]

numIslands(grid);