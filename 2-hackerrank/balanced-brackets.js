// Complete the isBalanced function below.
// https://www.hackerrank.com/challenges/balanced-brackets/problem
function isBalanced(s) {
  let stack = [];
  //(, ), {, }, [, ]

  for(let i = 0; i < s.length; i++) {
    let last = stack[stack.length-1];  //stack.peek();
    let paran = s.charAt(i);

    if(paran === ")" && last === "(") stack.pop();
    else if(paran ==="]" && last === "[") stack.pop();
    else if(paran ==="}" && last === "{") stack.pop();
    else stack.push(paran);
  }

  return stack.length === 0? "YES" : "NO";
}

isBalanced("{{[[(())]]}}");
isBalanced("{[(])}");
