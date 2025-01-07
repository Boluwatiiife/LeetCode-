// 2696. Minimum String Length After Removing Substrings

/*
You are given a string s consisting only of uppercase English letters.

You can apply some operations to this string where, in one operation, you can remove any occurrence of one of the substrings "AB" or "CD" from s.

Return the minimum possible length of the resulting string that you can obtain.

Note that the string concatenates after removing the substring and could produce new "AB" or "CD" substrings.
*/
// AB or CD

const minLength = function (s) {
  let string = s.split("");

  let i = 0;
  while (i < string.length - 1) {
    if (
      (string[i] === "A" && string[i + 1] === "B") ||
      (string[i] === "C" && string[i + 1] === "D")
    ) {
      string.splice(i, 2);
      i = Math.max(i - 1, 0);
    } else {
      i++;
    }
  }

  return string.length;
};

console.log(minLength("ABFCACDB"));
console.log(minLength("ACBBD"));
console.log(minLength("ACBABCDCDABA"));
