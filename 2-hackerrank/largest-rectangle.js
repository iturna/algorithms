// Complete the largestRectangle function below.
// https://www.hackerrank.com/challenges/largest-rectangle/problem
function largestRectangle(h) {
  debugger
  const heights = [...h, 0]
  const positions = [];
  let area = 0
  let i = 0
  while (i < heights.length) {
      if (!positions.length || heights[positions[positions.length-1]] <= heights[i]) {
          positions.push(i++)
      } else {
          const top = positions.pop()
          const lastPosition = positions[positions.length-1]
          const buildingHeight = heights[top]
          const numberOfBuildings = positions.length ? (i - lastPosition - 1) : i
          area = Math.max(area, buildingHeight * numberOfBuildings)
      }
  }
  return area
}
