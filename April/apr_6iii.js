// 275. H-Index II

const hIndex = function (citations) {
  citations.reverse();
  let n = citations.length;

  for (let i = 0; i < n; i++) {
    if (citations[i] < i + 1) return i;
  }
  return n;
};

console.log(hIndex([0, 1, 3, 5, 6]));
console.log(hIndex([1, 2, 100]));
console.log(hIndex([0]));
