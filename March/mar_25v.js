// 17. Letter Combinations of a Phone Number

const letterCombinations = function (digits) {
  if (!digits.length) return [];

  const letts = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let arr = [];

  function backtrack(index, curr) {
    if (index === digits.length) {
      arr.push(curr);
      return;
    }

    let letters = letts[digits[index]];
    for (le of letters) {
      backtrack(index + 1, curr + le);
    }
  }
  backtrack(0, "");
  return arr;
};

console.log(letterCombinations("23"));
console.log(letterCombinations(""));
console.log(letterCombinations("2"));
console.log(letterCombinations("326"));
console.log(letterCombinations("2333"));
