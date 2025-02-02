// 762. Prime Number of Set Bits in Binary Representation

const countPrimeSetBits = function (left, right) {
  let nums = [];
  for (let i = left; i <= right; i++) {
    nums.push(i);
  }
  let binaryy = [];
  for (let i = 0; i < nums.length; i++) {
    binaryy.push(nums[i].toString(2));
  }
  let ones = [];
  for (let i = 0; i < binaryy.length; i++) {
    ones.push(binaryy[i].split("").filter((xx) => xx !== "0").length);
  }

  const is_primee = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  const resultt = ones.filter(is_primee);
  return resultt.length;
};

console.log(countPrimeSetBits(6, 10));
console.log(countPrimeSetBits(10, 15));
console.log(countPrimeSetBits(842, 888));
