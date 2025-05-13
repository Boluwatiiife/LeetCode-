// 786. K-th Smallest Prime Fraction

const kthSmallestPrimeFraction = function (arr, k) {
  const n = arr.length;
  let left = 0,
    right = n - 1;

  let anss = [];
  while (left < right) {
    for (let i = left; i < n - 1; i++) {
      anss.push([arr[left], arr[i + 1]]);
    }
    left++;
  }

  anss.sort((a, b) => a[0] / a[1] - b[0] / b[1]);
  return anss[k - 1];
};

console.log(kthSmallestPrimeFraction([1, 2, 3, 5], 3));
console.log(kthSmallestPrimeFraction([1, 7], 1));
