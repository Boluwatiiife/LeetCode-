// 1954. Minimum Garden Perimeter to Collect Enough Apples

const minimumPerimeter = function (neededApples) {
  function totalApples(x) {
    return 2n * x * (x + 1n) * (2n * x + 1n);
  }

  let low = 1n;
  let high = 1000000n;
  let ans = -1n;
  const target = BigInt(neededApples);

  while (low <= high) {
    let mid = (low + high) / 2n;
    if (totalApples(BigInt(mid)) >= target) {
      ans = mid;
      high = mid - 1n;
    } else {
      low = mid + 1n;
    }
  }
  return Number(ans * 8n);
};

console.log(minimumPerimeter(1));
console.log(minimumPerimeter(13));
console.log(minimumPerimeter(1000000000));
