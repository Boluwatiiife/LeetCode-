// 2062. Count Vowel Substrings of a String

const countVowelSubstrings = function (word) {
  let arr = word.split("");
  let n = arr.length;
  let resultt = [];

  for (let i = 0; i < 1 << n; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        temp.push(arr[j]);
      }
    }
    resultt.push(temp);
  }

  return resultt;
  return arr;
};

console.log(countVowelSubstrings("aeiouu"));
// console.log(countVowelSubstrings("unicornarihan"));
// console.log(countVowelSubstrings("cuaieuouac"));
