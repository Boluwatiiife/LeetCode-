// 7. Reverse Integer

const reverse = function (x) {
  let arr = x.toString().split("");

  let anss = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!isNaN(arr[i])) {
      anss += arr[i];
    }
  }
  if (arr[0] === "-") {
    anss = "-" + anss;
  }
  let numm = Number(anss);

  function is32222(num) {
    const minn = -2147483648;
    const maxx = 2147483647;
    return num >= minn && num <= maxx;
  }

  return is32222(numm) ? numm : 0;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));
