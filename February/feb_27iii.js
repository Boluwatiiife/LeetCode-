// 2011. Final Value of Variable After Performing Operations

const finalValueAfterOperations = function (operations) {
  let sum = 0;
  for (char of operations) {
    if (char[1] === "+") {
      sum++;
    } else if (char[1] === "-") {
      sum--;
    }
  }
  return sum;
};

console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
console.log(finalValueAfterOperations(["++X", "++X", "X++"]));
console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"]));
