// 905. Sort Array By Parity

const sortArrayByParity = function (nums) {
  return nums.sort((a, b) => (a % 2 !== 0 ? 1 : b % 2 !== 0 ? -1 : 0));
};

console.log(sortArrayByParity([3, 1, 2, 4]));
console.log(sortArrayByParity([0]));
console.log(sortArrayByParity([0, 4, 5, 4, 5, 4, 5, 4]));
