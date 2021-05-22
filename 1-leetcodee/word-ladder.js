/**
 * https://leetcode.com/problems/word-ladder/
 * 
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
debugger
var ladderLength = function(beginWord, endWord, wordList) {
  if(beginWord.length!==endWord.length) return 0;

  let wordDic = new Set(wordList);
  let step = 2;
  let queue = [beginWord];

  while(queue.length) {
    let next = [];
    for(let currWord of queue) {
      let newWordList = newWords(wordDic, currWord);
      for(let newWord of newWordList) {
        if(newWord === endWord) return step;
        next.push(newWord);
      }
    }
    step++;
    queue = next;
  }

  return 0;
};


function newWords(wordDic, word) {
  let newWordSet = new Set();
  for(let i=0; i<word.length; i++) {
    for(let j=0; j<26; j++) {
      let newWord = word.slice(0, i) + String.fromCharCode(97+j) + word.slice(i+1);
      if(wordDic.has(newWord)) {
        newWordSet.add(newWord);
        wordDic.delete(newWord);
      }
    }
  }
  return newWordSet;
}


function tester() {
  return ladderLength("hot", "dog", ["hot","dog","dot"]);
  // return ladderLength("hot", "dog", ["hot","cog","dog","tot","hog","hop","pot","dot"]);
  // return ladderLength("hit", "cog", ["hot","dot","dog","lot","log"]);
  // return ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]);
  return ladderLength("a", "c", ["b","c"]);
  return ladderLength("a", "c", ["a","b","c"]);
}

// tester();
 
//  ladderLength("a", "c", ["a","b","c"]);
 ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]);

// ladderLength("hot", "dog", ["hot","dog"]);

// ladderLength("qa", "sq", ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]);

/*
function ladderLength(beginWord, endWord, wordList) {
  const dict = new Set(wordList);
  let step = 1;
  let q = [beginWord];

  while (q.length) {
    const next = [];
    for (let w of q) {
      if (w === endWord) return step;

      for (let i = 0; i < w.length; i++) {
        for (let j = 0; j < 26; j++) {
          const w2 = w.slice(0, i) + String.fromCharCode(97 + j) + w.slice(i + 1);  // 97 -> 'a'

          if (dict.has(w2)) {
            next.push(w2);
            dict.delete(w2);
          }
        }
      }
    }
    q = next;
    step++;
  }

  return 0;
}

*/