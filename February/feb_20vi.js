// 1608. Special Array With X Elements Greater Than or Equal X

const specialArray = function (nums) {
  let ansss = [];
  let resultt = [];
  for (let i = 0; i <= nums.length; i++) {
    for (let j = 0; j <= nums.length; j++) {
      if (nums[j] >= i) {
        ansss.push(nums[j]);
      }
    }
    resultt.push([i, ansss.length]);
    ansss = [];
  }

  for (let i = 0; i < resultt.length; i++) {
    let arr = resultt[i];

    if (arr[0] === arr[1]) {
      return arr[0];
    }
  }
  return -1;
};

console.log(specialArray([3, 5]));
console.log(specialArray([0, 0]));
console.log(specialArray([0, 4, 3, 0, 4]));
console.log(specialArray([3, 6, 7, 7, 0]));
console.log(specialArray([3, 6, 7, 7, 4, 4, 0]));
