// 1844. Replace All Digits with Characters

const replaceDigits = function (s) {
  let arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      arr[i] = String.fromCharCode(arr[i - 1].charCodeAt(0) + Number(arr[i]));
    }
  }
  return arr.join("");
};

console.log(replaceDigits("a1c1e1"));
console.log(replaceDigits("a1b2c3d4e"));
