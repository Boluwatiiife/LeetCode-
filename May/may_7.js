// 43. String Compression

const compress = function (chars) {
  const n = chars.length;
  let s = "";

  let arr = [];
  arr.push(chars[0]);
  for (let i = 1; i < n; i++) {
    if (chars[i] === arr[arr.length - 1]) {
      arr.push(chars[i]);
    } else {
      s += arr[0];
      if (arr.length > 1) s += arr.length.toString();
      arr = [];
      arr.push(chars[i]);
    }
  }
  s += arr[0];
  if (arr.length > 1) s += arr.length.toString();

  for (let i = 0; i < s.length; i++) {
    chars[i] = s[i];
  }
  return s.length;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
console.log(compress(["a"]));
console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
);
console.log(compress(["a", "a", "a", "b", "b", "a", "a"]));
