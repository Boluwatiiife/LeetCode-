// 3827. Count Monobit Integers

const countMonobit = function (n) {
  let ans = 0;

  for (let i = 0; i <= n; i++) {
    const temp = i.toString(2);
    if (temp.includes("1") && temp.includes("0")) {
      ans += 0;
    } else ans += 1;
  }

  return ans;
};

console.log(countMonobit(1));
console.log(countMonobit(4));
console.log(countMonobit(43));
