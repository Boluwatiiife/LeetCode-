// 989. Add to Array-Form of Integer

const addToArrayForm = function (num, k) {
  num = BigInt(num.join("")) + BigInt(k);
  num = num.toString().split("");
  for (let i = 0; i < num.length; i++) {
    num[i] = Number(num[i]);
  }
  return num;
};

console.log(addToArrayForm([1, 2, 0, 0], 34));
console.log(addToArrayForm([2, 7, 4], 181));
console.log(addToArrayForm([2, 1, 5], 806));
console.log(
  addToArrayForm(
    [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
    516
  )
);
