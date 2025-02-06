// 1013. Partition Array Into Three Parts With Equal Sum

const canThreePartsEqualSum = function (arr) {
  let total_sum = arr.reduce((a, b) => a + b);

  // if the total sum is not divisible by 3, partitioning is impossible
  if (total_sum % 3 !== 0) return false;

  let targett = total_sum / 3;
  let partition_count = 0,
    current_sum = 0;

  for (let i = 0; i < arr.length; i++) {
    current_sum += arr[i];

    if (current_sum === targett) {
      partition_count++;
      current_sum = 0;
    }

    if (partition_count === 2 && i < arr.length - 1) return true;
  }

  return false;
};

console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]));
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]));
console.log(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4]));
