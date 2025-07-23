// 1720. Decode XORed Array

const decode = function (encoded, first) {
  let ans = [first];

  for (const temp of encoded) {
    ans.push(ans[ans.length - 1] ^ temp);
  }

  return ans;
};

console.log(decode([1, 2, 3], 1));
console.log(decode([6, 2, 7, 3], 4));
