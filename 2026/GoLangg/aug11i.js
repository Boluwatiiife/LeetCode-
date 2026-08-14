// 2996. Smallest Missing Integer Greater Than Sequential Prefix Sum

// const missingInteger = function (nums) {
//   let ans = 0;
//   let intt = nums[0];
//   let sum = nums[0];

//   let arr = [];

//   for (let i = 1; i < nums.length; i++) {
//     if (intt + 1 === nums[i]) {
//       sum += nums[i];
//       intt = nums[i];
//     } else {
//       while (nums.includes(sum)) {
//         sum++;
//       }
//       if (ans <= sum) ans = sum;
//       arr.push(sum);
//       intt = nums[i];
//       sum = nums[i];
//     }
//   }
//     if (ans <= sum) ans = sum;
//   return ans;
// };

const missingInteger = function (nums) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    arr.push(nums[i]);
    if (nums[i] !== nums[i + 1] - 1) break;
  }
  temp = arr.reduce((a, b) => a + b, 0);
  while (nums.includes(temp)) {
    temp++;
  }
  return temp;
};

console.log(missingInteger([1, 2, 3, 2, 5]));
console.log(missingInteger([3, 4, 5, 1, 12, 14, 13]));
console.log(missingInteger([29, 30, 31, 32, 33, 34, 35, 36, 37]));
console.log(missingInteger([14, 9, 6, 9, 7, 9, 10, 4, 9, 9, 4, 4]));
