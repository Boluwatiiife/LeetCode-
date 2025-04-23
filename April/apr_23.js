// 1399. Count Largest Group

const countLargestGroup = function (n) {
  let arr = new Array();

  function digit_sum(num) {
    num = num.toString();
    let sum = 0;
    for (no of num) {
      sum += Number(no);
    }
    num = sum.toString();
    return Number(num);
  }
  for (let i = 1; i <= n; i++) {
    let temp = digit_sum(i);

    if (!isNaN(arr[temp - 1])) arr[temp - 1] += 1;
    else arr[temp - 1] = 1;
  }
  let maxx = Math.max(...arr);
  let count = arr.filter((no) => no === maxx);
  return count.length;
};

console.log(countLargestGroup(13));
console.log(countLargestGroup(2));
console.log(countLargestGroup(5));
console.log(countLargestGroup(24));
