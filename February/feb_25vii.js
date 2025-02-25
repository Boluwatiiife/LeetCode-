// 1929. Concatenation of Array

const getConcatenation = function (nums) {
  return [...nums, ...nums];
};

console.log(getConcatenation([1, 2, 1]));
console.log(getConcatenation([1, 3, 2, 1]));
