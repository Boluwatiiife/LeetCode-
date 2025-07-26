// 1974. Minimum Time to Type Word Using Special Typewriter

const minTimeToType = function (word) {
  let count = word.length;
  let arr = word.split("");
  arr.unshift("a");

  for (let i = 0; i < arr.length - 1; i++) {
    let one = arr[i],
      two = arr[i + 1];
    let front =
      Math.max(one.charCodeAt(0) - 96, two.charCodeAt(0) - 96) -
      Math.min(one.charCodeAt(0) - 96, two.charCodeAt(0) - 96);
    let back = Math.min(one.charCodeAt(0) - 96, two.charCodeAt(0) - 96) - 1;
    let use = 27;
    while (use > Math.max(one.charCodeAt(0) - 96, two.charCodeAt(0) - 96)) {
      back++;
      use--;
    }
    count += Math.min(front, back);
  }
  return count;
};

console.log(minTimeToType("abc"));
console.log(minTimeToType("bza"));
console.log(minTimeToType("zjpc"));
