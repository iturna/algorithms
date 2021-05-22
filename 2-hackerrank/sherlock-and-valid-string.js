// Complete the isValid function below.
//https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem
debugger
function isValid(s) {
  s = s.split('');
  let len = s.length;
  let map = s.reduce(function(agg, val) {
    if(agg.has(val)) agg.set(val, agg.get(val)+1);
    else agg.set(val, 1); 
    return agg;
  }, new Map());


  let valuesMap = new Map();
  for(let entry of map.entries()) {
    // console.log(entry);
    if(valuesMap.has(entry[1])) valuesMap.set(entry[1], valuesMap.get(entry[1])+1);
    else valuesMap.set(entry[1], 1); 
  }
  // console.log(map, valuesMap);

  let array = [...valuesMap.keys()];

  if(valuesMap.size===1) return 'YES';
  if(valuesMap.size===2 && valuesMap.has(1) && valuesMap.get(1) === 1) return 'YES';
  if(valuesMap.size===2 && Math.abs(array[0]-array[1])===1 && (valuesMap.get(array[0])===1 || valuesMap.get(array[1])===1)) return 'YES';


  return 'NO';  
}

function test() {
  return isValid('abcdefghhgfedecba')==='YES'
  && isValid('aabbccddeefghi')==='NO'
  && isValid('aaaabbcc')==='NO'
  && isValid('ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd')==='YES'
  && isValid('aaaaabc')==='NO'
}

test();

// isValid('aaaaabc')