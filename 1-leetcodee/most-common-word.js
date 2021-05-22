/**
 * https://leetcode.com/problems/most-common-word/
 * 
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
debugger
var mostCommonWord = function(paragraph, banned) {
  paragraph = cleanWord(paragraph);
  let wordArray = paragraph.split(' ');
  let map = {};
  let maxCount = 0;
  let maxWord = '';
  let bannedMap = banned.reduce(function(agg, val) {
    if(!agg[val]) agg[val]=1;
    return agg;
  }, {});

  for(let i=0; i<wordArray.length; i++) {
    let word = wordArray[i].trim();
    if(bannedMap[word]) continue;

    if(map[word]) map[word]++;
    else map[word]=1;

    if(map[word]>maxCount) {
      maxCount = map[word];
      maxWord = word;
    }
  }

  return maxWord;
};

function cleanWord(word) {
  //!?',;.
  return word.toLowerCase().replace(/[^a-zA-Z0-9]+/g,' ');
}

mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]);