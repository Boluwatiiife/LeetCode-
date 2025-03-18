// 3014. Minimum Number of Pushes to Type Word I

const minimumPushes = function (word) {
  let sum = 1;
  let count = 0;
  let count2 = 0;

  let arr = [...new Set(word.split(""))];
  for (char of arr) {
    count += sum;
    count2++;
    if (count % 8 === 0) {
      sum = 2;
    }
    if (count2 >= 16) {
      sum = 3;
    }
    if (count2 >= 24) {
      sum = 4;
    }
  }

  return count;
};

console.log(minimumPushes("abcde"));
console.log(minimumPushes("xycdefghij"));
console.log(minimumPushes("xycdefghiiiijjjj"));
console.log(minimumPushes("abcdefghijklmnopqrstuvwxyz"));
console.log(minimumPushes("abyefcxumqzht"));
console.log(minimumPushes("acolkxjbizfmhnrdq"));
console.log(minimumPushes("amrvxnhsewkoipjyuclgtdbfq"));
