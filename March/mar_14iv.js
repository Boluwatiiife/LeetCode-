// 2788. Split Strings by Separator

const splitWordsBySeparator = function (words, separator) {
  let arr = [];

  for (char of words) {
    char = char.split(separator);
    for (xx of char) {
      if (xx !== "") {
        arr.push(xx);
      }
    }
  }
  return arr;
};

console.log(splitWordsBySeparator(["one.two.three", "four.five", "six"], "."));
console.log(splitWordsBySeparator(["$easy$", "$problem$"], "$"));
console.log(splitWordsBySeparator(["|||"], "|"));
