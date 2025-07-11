// 806. Number of Lines To Write String

const numberOfLines = function (widths, s) {
  let ans = new Array(2).fill(0);

  let sum = 0;
  for (const char of s) {
    sum += widths[char.charCodeAt(0) - 96 - 1];
    if (sum > 100) {
      ans[0]++;
      sum = widths[char.charCodeAt(0) - 96 - 1];
    }
  }
  ans[0]++;
  ans[1] = sum;

  return ans;
};

console.log(
  numberOfLines(
    [
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10, 10,
    ],
    "abcdefghijklmnopqrstuvwxyz"
  )
);
console.log(
  numberOfLines(
    [
      4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10,
    ],
    "bbbcccdddaaa"
  )
);
console.log(
  numberOfLines(
    [
      7, 5, 4, 7, 10, 7, 9, 4, 8, 9, 6, 5, 4, 2, 3, 10, 9, 9, 3, 7, 5, 2, 9, 4,
      8, 9,
    ],
    "zlrovckbgjqofmdzqetflraziyvkvcxzahzuuveypqxmjbwrjvmpdxjuhqyktuwjvmbeswxuznumazgxvitdrzxmqzhaaudztgie"
  )
);
