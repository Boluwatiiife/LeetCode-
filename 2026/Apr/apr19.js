// 2946. Matrix Similarity After Cyclic Shifts

const areSimilar = function (mat, k) {
  const solid = mat;
  function swap(arr, x, i) {
    for (let j = 0; j < x; j++) {
      if (i % 2 === 0) {
        let temp = arr.shift();
        arr.push(temp);
      }
      if (i % 2 !== 0) {
        let temp = arr.pop();
        arr.unshift(temp);
      }
    }
    return arr;
  }
  //   return mat;

  let array = [];
  let sup = [];
  for (let i = 0; i < mat.length; i++) {
    sup.push(mat[i]);
    const ans = swap(mat[i], k, i);
    array.push(ans);
  }
  //   return mat;
  return [sup, mat, array];
};

console.log(
  areSimilar(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    4,
  ),
);
console.log(
  areSimilar(
    [
      [1, 2, 1, 2],
      [5, 5, 5, 5],
      [6, 3, 6, 3],
    ],
    2,
  ),
);
console.log(
  areSimilar(
    [
      [2, 2],
      [2, 2],
    ],
    3,
  ),
);
