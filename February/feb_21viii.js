// 1694. Reformat Phone Number

const reformatNumber = function (number) {
  let nums = number.replace(/[\s-]/g, "");
  let arr = [];
  let i = 0;

  while (nums.length - i > 4) {
    arr.push(nums.slice(i, i + 3));
    i += 3;
  }

  let remainss = nums.length - i;
  if (remainss === 4) {
    arr.push(nums.slice(i, i + 2));
    arr.push(nums.slice(i + 2));
  } else {
    arr.push(nums.slice(i));
  }

  return arr.join("-");
  return nums;
};

console.log(reformatNumber("1-23-45 6"));
console.log(reformatNumber("123 4-567"));
console.log(reformatNumber("123 4-5678"));
console.log(reformatNumber("9964-"));
