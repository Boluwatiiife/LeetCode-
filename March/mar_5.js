// 2273. Find Resultant Array After Removing Anagrams

const removeAnagrams = function (words) {
  let arr = [];

  for (char of words) {
    let temp = char.split("");
    temp = temp.sort();
    arr.push([char, temp.join("")]);
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][1] === arr[i - 1][1]) {
      arr.splice(i, 1);
      i--;
    }
  }
  let result = [];
  for ([one, two] of arr) {
    result.push(one);
  }
  return result;
};

console.log(removeAnagrams(["abba", "baba", "bbaa", "cd", "cd"]));
console.log(removeAnagrams(["a", "b", "c", "d", "e"]));
