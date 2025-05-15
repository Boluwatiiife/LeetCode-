// 881. Boats to Save People

const numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  const n = people.length;

  let left = 0;
  let right = n - 1;
  let count = 0;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
    count++;
  }
  return count;
};

console.log(numRescueBoats([1, 2], 3));
console.log(numRescueBoats([3, 2, 2, 1], 3));
console.log(numRescueBoats([3, 5, 3, 4], 5));
console.log(numRescueBoats([3, 5, 3, 4, 2, 4], 5));
console.log(numRescueBoats([1, 1, 1, 1, 2, 2, 3, 5, 4], 5));
