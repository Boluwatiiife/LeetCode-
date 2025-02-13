// 1365. How Many Numbers Are Smaller Than the Current Number

const smallerNumbersThanCurrent = function (nums) {
  let resultt = [];
  for (let i = 0; i < nums.length; i++) {
    let anss = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] > nums[j]) {
        anss++;
      }
    }
    resultt.push(anss);
  }
  return resultt;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));
