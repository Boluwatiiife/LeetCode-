// 3582. Generate Tag for Video Caption
const generateTag = function (caption) {
  let arr = caption.split(" ").filter((xx) => xx !== "");
  if (arr.length < 1) return "#";
  let ans = "#";
  let one = arr[0].toLowerCase();
  ans += one;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === " ") continue;
    let word = arr[i].toLowerCase().split("");
    word[0] = word[0].toUpperCase();
    ans += word.join("");
  }

  const result = ans.slice(0, 100);

  return result;
};

console.log(generateTag("Leetcode daily streak achieved"));
console.log(generateTag("can I Go There"));
console.log(
  generateTag(
    "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
  )
);
console.log(
  generateTag(
    "Bold apple beyond bright future crash mountains glow light gently dance waits shore breeze mind "
  )
);
console.log(generateTag("   "));
