// 3007. Maximum Number That Sum of the Prices Is Less Than or Equal to K

const findMaximumNumber = function (k, x) {
  function countOnes(num, bit) {
    const fullCycle = 1n << BigInt(bit + 1);
    const halfCyle = 1n << BigInt(bit);
    const bigNum = BigInt(num) + 1n;

    const fullBlocks = bigNum / fullCycle;
    const remainder = bigNum % fullCycle;

    return (
      fullBlocks * halfCyle + (remainder > halfCyle ? remainder - halfCyle : 0n)
    );
  }

  function accumm(num) {
    let total = 0n;
    for (let bit = x - 1; bit < 60; bit += x) {
      total += countOnes(num, bit);
      if (total > BigInt(k)) return total;
    }
    return total;
  }

  let left = 1n;
  let right = 10n ** 18n;
  let ans = 0n;

  while (left <= right) {
    const mid = (left + right) / 2n;
    const price = accumm(mid);

    if (price <= BigInt(k)) {
      ans = mid;
      left = mid + 1n;
    } else {
      right = mid - 1n;
    }
  }
  return Number(ans);
};

console.log(findMaximumNumber(9, 1));
console.log(findMaximumNumber(7, 2));
console.log(findMaximumNumber(2703, 3));
console.log(findMaximumNumber(3278539330613, 5));
console.log(findMaximumNumber(19, 6));
