// 2946. Matrix Similarity After Cyclic Shifts

const areSimilar = function (mat, k) {
  let solid = Array.from(
    { length: mat.length },
    () => new Array(mat[0].length),
  );

  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[0].length; col++) {
      solid[row][col] = mat[row][col];
    }
  }

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
  for (let i = 0; i < mat.length; i++) {
    const ans = swap(mat[i], k, i);
    array.push(ans);
  }

  function conpareArr(one, two) {
    const n = one.length;
    for (let i = 0; i < n; i++) {
      if (one[i] !== two[i]) return false;
    }

    return true;
  }

  for (let i = 0; i < solid.length; i++) {
    const ans = conpareArr(solid[i], array[i]);
    if (ans === false) return false;
  }

  return true;
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
