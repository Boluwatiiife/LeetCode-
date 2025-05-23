// 2105. Watering Plants II

const minimumRefill = function (plants, capacityA, capacityB) {
  const n = plants.length;
  let left = 0;
  let right = n - 1;
  let alice = capacityA;
  let bob = capacityB;
  let refill = 0;

  while (left <= right) {
    if (left === right) {
      if (Math.max(alice, bob) < plants[left]) refill++;
      break;
    }
    if (alice < plants[left]) {
      alice = capacityA;
      refill++;
    }
    alice = alice - plants[left];
    left++;
    if (bob < plants[right]) {
      bob = capacityB;
      refill++;
    }
    bob = bob - plants[right];
    right--;
  }
  return refill;
};

console.log(minimumRefill([2, 2, 3, 3], 5, 5));
console.log(minimumRefill([2, 2, 3, 3], 3, 4));
console.log(minimumRefill([5], 10, 8));
console.log(minimumRefill([1, 2, 3, 4, 5], 6, 5));
console.log(minimumRefill([1, 2, 4, 4, 5], 6, 5));
console.log(minimumRefill([2, 1, 1], 2, 2));
