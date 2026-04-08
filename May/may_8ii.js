// 524. Longest Word in Dictionary through Deleting

const findLongestWord = function (s, dictionary) {
  function check_sub(a, b) {
    let i = 0;
    j = 0;
    while (i < a.length && j < b.length) {
      if (a[i] === b[j]) i++;
      j++;
    }
    return i === a.length;
  }
  dictionary.sort();
  dictionary.sort((a, b) => b.length - a.length);

  for (let word of dictionary) {
    if (check_sub(word, s)) return word;
  }
  return "";
};

console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"]));
console.log(findLongestWord("abpcplea", ["a", "b", "c"]));
console.log(findLongestWord("abpcplea", ["b", "c", "a"]));
