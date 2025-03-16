// 2937. Make Three Strings Equal

const findMinimumOperations = function (s1, s2, s3) {
  let onee = s1.split("");
  let twoo = s2.split("");
  let three = s3.split("");
  let count = 0;

  while (onee.length > 0 || three.length > 0 || twoo.length > 0) {
    if (onee.join("") === twoo.join("") && twoo.join("") === three.join("")) {
      return count;
    }
    let maxx = Math.max(onee.length, twoo.length, three.length);
    if (onee.length === maxx) {
      onee.pop();
      count++;
    }
    if (twoo.length === maxx) {
      twoo.pop();
      count++;
    }
    if (three.length === maxx) {
      three.pop();
      count++;
    }
  }
  return -1;
};

console.log(findMinimumOperations("abc", "abb", "ab"));
console.log(findMinimumOperations("dac", "bac", "cac"));
