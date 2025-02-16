// 1464. Maximum Product of Two Elements in an Array

const maxProduct = function (nums) {
  let first_max = 0,
    second_max = 0;

  for (elem of nums) {
    if (elem > first_max) {
      second_max = first_max;
      first_max = elem;
    } else if (elem > second_max) {
      second_max = elem;
    }
  }
  return (first_max - 1) * (second_max - 1);
};

console.log(maxProduct([3, 4, 5, 2]));
console.log(maxProduct([1, 5, 4, 5]));
console.log(maxProduct([3, 7]));
