// 2710. Remove Trailing Zeros From a String

const removeTrailingZeros = function (num) {
  let arr = num.split("");

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === "0") {
      arr.splice(i, 1);
    } else {
      break;
    }
  }
  return arr.join("");
};

console.log(removeTrailingZeros("51230100"));
console.log(removeTrailingZeros("123"));
