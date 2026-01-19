// 3798. Largest Even Number

const largestEven = function (s) {
  const arr = s.split("");

  for (let i = s.length - 1; i >= 0; i--) {
    if (Number(arr[i]) % 2 === 0) {
      return arr.splice(0, i + 1).join("");
    }
  }

  return "";
};

console.log(largestEven("1112"));
console.log(largestEven("221"));
console.log(largestEven("1"));
