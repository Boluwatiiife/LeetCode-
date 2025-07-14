// 944. Delete Columns to Make Sorted

const minDeletionSize = function (strs) {
  function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) return false;
    }
    return true;
  }
  const m = strs[0].length;
  const n = strs.length;

  let ans = 0;
  for (let i = 0; i < m; i++) {
    let col = [];
    for (let j = 0; j < n; j++) {
      col.push(strs[j][i]);
    }
    if (!isSorted(col)) ans++;
  }
  return ans;
};

console.log(minDeletionSize(["cba", "daf", "ghi"]));
console.log(minDeletionSize(["a", "b"]));
console.log(minDeletionSize(["zyx", "wvu", "tsr"]));
