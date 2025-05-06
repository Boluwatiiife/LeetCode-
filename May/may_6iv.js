// 202. Happy Number

const isHappy = function (n) {
  function get_next(num) {
    let sum = 0;
    while (num > 0) {
      let digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  let slow = n;
  let fast = get_next(n);

  while (fast !== 1 && slow !== fast) {
    slow = get_next(slow);
    fast = get_next(get_next(fast));
  }
  return fast === 1;
};

console.log(isHappy(19));
console.log(isHappy(2));
