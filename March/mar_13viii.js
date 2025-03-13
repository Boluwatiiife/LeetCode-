// 2729. Check if The Number is Fascinating

const isFascinating = function (n) {
  let char = n.toString();
  char += (n * 2).toString();
  char += (n * 3).toString();

  if (char.length !== 9) return false;
  char = new Set(char);
  if (char.size !== 9) return false;
  return char.has("0") ? false : true;
};

console.log(isFascinating(192));
console.log(isFascinating(100));
console.log(isFascinating(546));
console.log(isFascinating(111));
