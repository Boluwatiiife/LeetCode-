// 2967. Minimum Cost to Make Array Equalindromic

const minimumCost = function (nums) {
  function isPalindrome(num) {
    let word = num.toString();
    let left = 0;
    let right = word.length - 1;

    while (left < right) {
      if (word[left] === word[right]) {
        left++;
        right--;
      } else return false;
    }
    return true;
  }
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let mid = nums[Math.floor(n / 2)];
  let beff = mid;
  let aff = mid;
  while (!isPalindrome(aff)) aff++;
  while (!isPalindrome(beff)) beff--;

  let sum = 0;
  let summ = 0;
  for (let i = 0; i < n; i++) {
    sum += Math.abs(nums[i] - beff);
    summ += Math.abs(nums[i] - aff);
  }

  return Math.min(sum, summ);
};

console.log(minimumCost([1, 2, 3, 4, 5])); // 6
console.log(minimumCost([10, 12, 13, 14, 15])); //11
console.log(minimumCost([22, 33, 22, 33, 22])); //22
console.log(minimumCost([900, 1000, 1000])); //101
console.log(minimumCost([308, 313, 319, 322])); //20
console.log(minimumCost([101, 115, 116, 120, 122])); //33
