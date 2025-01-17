// 21. Merge Two Sorted Lists

const mergeTwoLists = function (list1, list2) {
  let result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
  }
  for (let j = 0; j < list2.length; j++) {
    result.push(list2[j]);
  }
  for (let x = 0; x < result.length - 1; x++) {
    for (let y = 0; y < result.length - x - 1; y++) {
      if (result[y] > result[y + 1]) {
        let temp = result[y];
        result[y] = result[y + 1];
        result[y + 1] = temp;
      }
    }
  }
  return result;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoLists([1, 5, 7, 65], [2, 3, 43]));
console.log(mergeTwoLists([], [0]));
