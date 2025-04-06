// 274. H-Index

const hIndex = function (citations) {
  citations.sort((a, b) => b - a);
  let n = citations.length;

  for (let i = 0; i < n; i++) {
    if (citations[i] < i + 1) return i;
  }

  return n;
};

console.log(hIndex([3, 0, 6, 1, 5]));
console.log(hIndex([1, 3, 1]));
console.log(hIndex([100]));
