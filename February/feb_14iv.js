// 1385. Find the Distance Value Between Two Arrays

const findTheDistanceValue = function (arr1, arr2, d) {
  let resultt = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        resultt.push(arr1[i]);
      }
    }
  }
  let anss = [];
  for (let i = 0; i < arr1.length; i++) {
    if (resultt.includes(arr1[i])) {
      continue;
    } else {
      anss.push(arr1[i]);
    }
  }
  return anss.length;
};

console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2));
console.log(findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3));
console.log(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6));
console.log(findTheDistanceValue([-3, -3, 4, -1, -10], [7, 10], 12));
