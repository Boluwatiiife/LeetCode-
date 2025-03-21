// 3304. Find the K-th Character in String Game I

const kthCharacter = function (k) {
  let alpha = "abcdefghijklmnopqrstuvwxyza";

  let word = "a";
  while (word.length < k) {
    let temp = "";
    for (char of word) {
      temp += alpha[alpha.indexOf(char) + 1];
    }
    word += temp;
  }
  return word[k - 1];
};

console.log(kthCharacter(5));
console.log(kthCharacter(10));
console.log(kthCharacter(54));
