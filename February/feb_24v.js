// 1880. Check if Word Equals Summation of Two Words

const isSumEqual = function (firstWord, secondWord, targetWord) {
  let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

  let indexx = [];
  const checkk = function (word) {
    let arr = [];
    for (char of word) {
      arr.push(alpha.indexOf(char).toString());
    }
    indexx.push(Number(arr.join("")));
  };
  checkk(firstWord);
  checkk(secondWord);
  checkk(targetWord);
  if (indexx[0] + indexx[1] === indexx[2]) return true;
  return false;
};

console.log(isSumEqual("acb", "cba", "cdb"));
console.log(isSumEqual("aaa", "a", "aab"));
console.log(isSumEqual("aaa", "a", "aaaa"));
