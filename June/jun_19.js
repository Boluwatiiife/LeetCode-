// 2601. Prime Subtraction Operation

const primeSubOperation = function (nums) {
  function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i * i <= n; i += 2) {
      if (n % i === 0) return false;
    }

    return true;
  }
  const n = nums.length;
  let arr = [];
  arr.push(0);

  for (let i = 0; i < n; i++) {
    let no = nums[i];
    for (let j = no; j > 0; j--) {
      if (isPrime(j)) {
        let temp = no - j;
        if (temp > arr[arr.length - 1]) {
          arr.push(temp);
          break;
        }
      }
      if (j === 1) {
        arr.push(no);
      }
    }
  }
  arr.shift();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i + 1]) return false;
  }
  return true;
};

console.log(primeSubOperation([4, 9, 6, 10]));
console.log(primeSubOperation([6, 8, 11, 12]));
console.log(primeSubOperation([5, 8, 3]));
console.log(primeSubOperation([998, 2]));
