// 2839. Check if Strings Can be Made Equal With Operations I

const canBeEqual = function (s1, s2) {
  if (s1 === s2) return true;
  let arr = s1.split("");

  let temp = arr[1];
  arr[1] = arr[3];
  arr[3] = temp;

  if (arr.join("") === s2) return true;
  arr = s1.split("");

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j - i === 2) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        if (arr.join("") === s2) return true;
      }
    }
  }
  return false;
};

console.log(canBeEqual("abcd", "cdab"));
console.log(canBeEqual("abcd", "dacb"));
console.log(canBeEqual("bnxw", "bwxn"));
