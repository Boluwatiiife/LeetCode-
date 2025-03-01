// 2119. A Number After a Double Reversal

const isSameAfterReversals = function (num) {
  let arr = num.toString();
  if (arr.length > 1 && arr[arr.length - 1] === "0") return false;
  return true;
};

console.log(isSameAfterReversals(526));
console.log(isSameAfterReversals(1800));
console.log(isSameAfterReversals(0));
