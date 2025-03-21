// 3340. Check Balanced String

const isBalanced = function (num) {
  let arr = num.split("").map(Number);

  let even = 0,
    odd = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      even += arr[i];
    }
    if (i % 2 !== 0) {
      odd += arr[i];
    }
  }

  return even === odd ? true : false;
};

console.log(isBalanced("1234"));
console.log(isBalanced("24123"));
