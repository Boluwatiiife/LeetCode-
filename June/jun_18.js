// 2517. Maximum Tastiness of Candy Basket

const maximumTastiness = function (price, k) {
  price.sort((a, b) => a - b);
  function checkDiff(x) {
    let count = 1;
    let last = price[0];
    for (let i = 1; i < price.length; i++) {
      if (price[i] - last >= x) {
        count++;
        last = price[i];
      }
      if (count >= k) return true;
    }
    return false;
  }
  let left = 0;
  let right = price[price.length - 1] - price[0];
  let ans = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (checkDiff(mid)) {
      ans = mid;
      left = mid + 1;
    } else right = mid - 1;
  }

  return ans;
};

console.log(maximumTastiness([13, 5, 1, 8, 21, 2], 3));
console.log(maximumTastiness([1, 3, 1], 2));
console.log(maximumTastiness([7, 7, 7, 7], 2));
