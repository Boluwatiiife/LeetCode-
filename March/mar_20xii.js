// 3210. Find the Encrypted String

const getEncryptedString = function (s, k) {
  if (s.length === 1) return s;
  let ss = s;
  for (let i = 0; i < k; i++) {
    ss += s;
  }
  let arr = ss.split("");

  let ress = "";
  for (let i = 0; i < s.length; i++) {
    ress += arr[i + k];
  }

  return ress;
};

console.log(getEncryptedString("dart", 3));
console.log(getEncryptedString("aaa", 1));
console.log(getEncryptedString("qqs", 9));
