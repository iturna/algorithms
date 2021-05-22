/**
 * https://leetcode.com/problems/valid-parenthesis-string/
 * 
 * @param {string} s
 * @return {boolean}
 */
debugger
// var checkValidString = function(s, count=0) {
//   // let count = 0; 
//   // let star = 0;
//   // s = simply(s);
//   // console.log(s);

//   for(let i=0; i<s.length; i++) {
//     // if(count<0) return false;
//     // if(count+star<0) return false;
//     // if(count<0 && star+count>=0) {
//     //   star = star + count;
//     //   count = 0;
//     // }
//     if(count<0) return false;
//     let char = s[i];
//     if(char==='(') {
//       count++;
//       continue;
//     } else if(char===')') {
//       count--;
//       continue;
//     } else {
//       let next = s.substring(i+1);
//       return checkValidString(next, count) || checkValidString(next, count - 1) || checkValidString(next, count + 1);
//     }
//   }
  
//   return count===0;
// }

// function simply(s) {
//   let i = 0;
//   let found = false;

//   while(s.charAt(i+1)) {
//     if(s.charAt(i) === '(' && s.charAt(i+1) === ')') {
//       found = true;
//       s = s.substring(0, i) + s.substring(i+2);
//       i--;
//     }
//     i++;
//   }

//   if(found) {
//     return simply(s);
//   }

//   return s;
// }

var checkValidString = function(s) {
  let lo = 0;
  let hi = 0;
  
  for (let char of s) {
    if (char === '(') {
      hi++;
      lo++;
      continue;
    }

    if (char === ')') {
      hi--;
      lo = Math.max(0, lo - 1);
      if(hi < 0) return false;
      continue;
    }
    
    hi++;
    lo = Math.max(0, lo - 1);
  }
  
  return lo === 0;
};

function tester() {
  return checkValidString("(((((*)))))") === true
        && checkValidString("***)))))") === false
        && checkValidString("((*))))") === false
        && checkValidString("((((()((((()(())((()))(((())))))))))))))))(()((((())(**)") === false
        && checkValidString("(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())") === false
        && checkValidString("(((((*(((((*((**(((*)*((((**))*)*)))))))))((*(((((**(**)") === false
        && checkValidString("((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()") === true
        && checkValidString("(((((*(((((*)*(**)))))))))))((((*)))))(((**(*)))(*)") === true
        && checkValidString("**************************************************))))))))))))))))))))))))))))))))))))))))))))))))))") === true
}

tester();



// var checkValidString = function(s) {
//   if(s.length===1 && s[0]!=='*') return false;
//   if(s.length===1 && s[0]==='*') return true;
//   s = simply(s);
//   let shift = s.substring(0, 1);
//   s = s.substring(1);
//   return checkValidHelper(s, shift, "", {});    
// };

// function checkValidHelper(s, paran, stack, cache) {
//   if(stack.substring(0,1)===')') return false;
//   if(stack.length-1>s.length) return false;
  
//   let key = s + '-' + stack + '-' + paran;
//   if(cache[key]) return cache[key];

//   //calcualte
//   if(paran===")" && stack[stack.length-1]==="(") {
//     stack = stack.substring(0, stack.length-1);
//   } else if(paran==="(" || paran===")") {
//     stack += paran;
//   } 

//   if(paran === "*") {
//     let ret = checkValidHelper(s, '', stack, cache);
//     if(!ret) {
//       ret = checkValidHelper(s, '(', stack, cache);
//     } 
//     if(!ret) {
//       ret = checkValidHelper(s, ')', stack, cache);
//     }
//     cache[key] = ret;
//     return ret;
//   } else {
//     if(s.length) {
//       let shift = s.substring(0, 1);
//       s = s.substring(1);
//       let ret = checkValidHelper(s, shift, stack, cache);
//       cache[key] = ret;
//       return ret;
//     } {
//       let ret = stack.length===0;
//       cache[key] = ret;
//       return ret;
//     }
//   }
// }

// function simply(s) {
//   let i = 0;
//   let found = false;

//   while(s.charAt(i+1)) {
//     if(s.charAt(i) === '(' && s.charAt(i+1) === ')') {
//       found = true;
//       s = s.substring(0, i) + s.substring(i+2);
//       i--;
//     }
//     i++;
//   }

//   if(found) {
//     return simply(s);
//   }

//   return s;
// }