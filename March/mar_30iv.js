// 77. Combinations

const combine = function (n, k) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  let resultt = [];
  let nn = arr.length;

  for (let i = 0; i < 1 << nn; i++) {
    let temp = [];
    for (let j = 0; j < nn; j++) {
      if (i & (1 << j)) {
        temp.push(arr[j]);
      }
    }
    if (temp.length === k) {
      resultt.push(temp);
    }
  }

  return resultt;
};

console.log(combine(4, 2));
console.log(combine(1, 1));
