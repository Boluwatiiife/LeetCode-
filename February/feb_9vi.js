// 1287. Element Appearing More Than 25% In Sorted Array

const findSpecialInteger = function (arr) {
  let count = new Map();
  for (num of arr) {
    count.set(num, (count.get(num) || 0) + 1);
  }
  let max_count = 0;
  let most_elem = null;

  for (let [key, value] of count) {
    if (value > max_count) {
      max_count = value;
      most_elem = key;
    }
  }
  return most_elem;
};

console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]));
console.log(findSpecialInteger([1, 1]));
