// 825. Friends Of Appropriate Ages

const numFriendRequests = function (ages) {
  ages.sort((a, b) => a - b);
  const n = ages.length;
  let count = 0;
  let left = 0;
  let right = 0;

  for (let i = 0; i < n; i++) {
    const age = ages[i];
    if (age < 15) continue;

    while (left < n && ages[left] <= 0.5 * age + 7) {
      left++;
    }
    while (right + 1 < n && ages[right + 1] <= age) {
      right++;
    }

    count += right - left;
  }

  return count;
};

console.log(numFriendRequests([16, 16]));
console.log(numFriendRequests([16, 17, 18]));
console.log(numFriendRequests([20, 30, 100, 110, 120]));
