// 1556. Thousand Separator

const thousandSeparator = function (n) {
  let nums = n.toString().split("");
  let resultt = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (resultt.length !== 0 && resultt.length % 3 === 0) {
      resultt.push(nums[i] + ".");
    } else {
      resultt.push(nums[i]);
    }
  }
  return resultt.reverse().join("");
};

console.log(thousandSeparator(987));
console.log(thousandSeparator(1234));
console.log(thousandSeparator(123456));
console.log(thousandSeparator(123456789));
