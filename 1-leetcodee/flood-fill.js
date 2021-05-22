/**
 * https://leetcode.com/problems/flood-fill/
 * 
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
debugger
var floodFill = function(image, sr, sc, newColor) {
  if(image[sr][sc]===newColor) return image;
  fillNewColor(image, sr, sc, image[sr][sc], newColor);
  return image;
};

function fillNewColor(image, sr, sc, oldColor, newColor) {
  if(sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length || image[sr][sc]!==oldColor) {
    return;
  }

  image[sr][sc] = newColor;

  fillNewColor(image, sr+1, sc, oldColor, newColor);
  fillNewColor(image, sr-1, sc, oldColor, newColor);
  fillNewColor(image, sr, sc+1, oldColor, newColor);
  fillNewColor(image, sr, sc-1, oldColor, newColor);

  return;
}

// floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2);
floodFill([[0,0,0],[0,1,1]], 1, 1, 1);

