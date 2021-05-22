/**
 * https://leetcode.com/problems/word-ladder-ii/
 * 
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
debugger
var findLadders = function(beginWord, endWord, wordList) {
    const wordDic = new Set(wordList);
    let queue = [beginWord];
    let bag = [];
    findLadderbacktrack(wordDic, queue, endWord, beginWord, bag);
    return bag;
};

function findLadderbacktrack(wordDic, next, endWord, progress, bag) {
  if(next.length===0) return;
  // let newWordDic = new Set(wordDic);
  let newWordDic = wordDic;
  let newNext = [];
  for(let currWord of next) {
    for(let newWord of wordGenerator(currWord, newWordDic)) {
      progress += '-' + newWord;
      if(newWord === endWord) {
        bag.push(progress);
        return;
      }
      console.log(newWord);
      newNext.push(newWordDic);
    }
  }

  findLadderbacktrack(newWordDic, newNext, endWord, progress, bag);
}

function wordGenerator(word, wordDic){
  let newWordList = [];
  for(let i=0; i<word.length; i++) {
    for(let j=0; j<26; j++) {
      let newWord = word.slice(0, i) + String.fromCharCode(97+j) + word.slice(i+1);
      if(wordDic.has(newWord)) {
        newWordList.push(newWord);
        // wordDic.delete(newWord);
      }
    }
  }
  return newWordList;
}



findLadders("hit", "cog", ["hot","dot","dog","lot","log","cog"]);
// [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]

// for(let i=0; i<26; i++) {
//   console.log(String.fromCharCode(97+i));
// }

//65+26 (buyuk harfler)
//49+10 (rakamlar 0 dan başlar)
//97+26 (küçük harfler)
