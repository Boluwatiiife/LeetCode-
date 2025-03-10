// 2582. Pass the Pillow

const passThePillow = function (n, time) {
  let nums = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }
  const forward = [...nums];
  const backward = nums.slice(1, -1).reverse();
  const pattern = [...forward, ...backward];

  let arr = [];
  for (let i = 0; i < time + 1; i++) {
    arr.push(pattern[i % pattern.length]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (i === time) return arr[i];
  }
};

console.log(passThePillow(4, 5));
console.log(passThePillow(3, 2));
console.log(passThePillow(18, 38));
console.log(passThePillow(5, 8));
