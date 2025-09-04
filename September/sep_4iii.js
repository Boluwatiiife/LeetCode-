// 3668. Restore Finishing Order

const recoverOrder = function (order, friends) {
  let ans = [];
  for (const no of order) {
    if (friends.includes(no)) ans.push(no);
  }

  return ans;
};

console.log(recoverOrder([3, 1, 2, 5, 4], [1, 3, 4]));
console.log(recoverOrder([1, 4, 5, 3, 2], [2, 5]));
