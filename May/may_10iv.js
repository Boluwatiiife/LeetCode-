// 202. Happy Number

// given an integer write a function to determine if after replacing it with
// an integer equal to the sum of the square of all its digits, leads us to the number 1

const find_ultimate_one = function (num) {
  function find_square_sum(num) {
    let sum = 0;
    while (num > 0) {
      digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  }
  let slow = num,
    fast = num;

  // is there a circle i.e slow === fast return false

  while (true) {
    slow = find_square_sum(slow);
    fast = find_square_sum(find_square_sum(fast));

    if (slow === 1 || fast === 1) return true;
    if (slow === fast) return false;
  }
};

console.log(find_ultimate_one(23));
console.log(find_ultimate_one(12));
console.log(find_ultimate_one(19));
console.log(find_ultimate_one(2));
