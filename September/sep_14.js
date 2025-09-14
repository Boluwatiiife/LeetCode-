// 313. Super Ugly Number

const nthSuperUglyNumber = function (n, primes) {
  function indexArr(arr) {
    const min = Math.min(...arr);
    let ans = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === min) ans.push(i);
    }

    return ans;
  }

  let ans = [1];
  let indices = Array(primes.length).fill(0);
  let dex = 1;

  while (dex < n) {
    let candidates = Array(primes.length);
    for (let i = 0; i < primes.length; i++) {
      candidates[i] = ans[indices[i]] * primes[i];
    }
    let small = indexArr(candidates);
    ans.push(Math.min(...candidates));
    for (const no of small) {
      indices[no]++;
    }
    dex++;
  }

  return ans[n - 1];
};

console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]));
console.log(nthSuperUglyNumber(1, [2, 3, 5]));
