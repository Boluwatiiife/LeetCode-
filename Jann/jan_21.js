// 2788. Split Strings by Separator

const splitWordsBySeparator = function (words, separator) {
  let ans = [];

  for (const temp of words) {
    const arr = temp.split(separator);
    for (const char of arr) {
      if (char.length > 0) ans.push(char);
    }
  }

  return ans;
};

console.log(splitWordsBySeparator(["one.two.three", "four.five", "six"], "."));
console.log(splitWordsBySeparator(["$easy$", "$problem$"], "$"));
console.log(splitWordsBySeparator(["|||"], "|"));
