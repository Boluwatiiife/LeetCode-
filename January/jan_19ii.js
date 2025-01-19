// 345. Reverse Vowels of a String

/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:

Input: s = "leetcode"

Output: "leotcede"
*/

const reverseVowels = function (s) {
  let stringArr = s.split("");
  let vowelss = [];
  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] === "A") {
      vowelss.push(stringArr[i]);
      stringArr[i] = "iiiii";
    }
    if (stringArr[i] === "a") {
      vowelss.push(stringArr[i]);
      stringArr[i] = "iiiii";
    }
    if (stringArr[i] === "E") {
      vowelss.push(stringArr[i]);
      stringArr[i] = "iiiii";
    }
    if (stringArr[i] === "e") {
      vowelss.push(stringArr[i]);
      stringArr[i] = "iiiii";
    }
    if (stringArr[i] === "I") {
      vowelss.push(stringArr[i]);
      stringArr[i] = "iiiii";
    }
    if (stringArr[i] === "i") {
      vowelss.push(stringArr[i]);
      stringArr[i] = "iiiii";
    }
    if (stringArr[i] === "O") {
      vowelss.push(stringArr[i]);
      stringArr[i] = "iiiii";
    }
    if (stringArr[i] === "o") {
      vowelss.push(stringArr[i]);
      stringArr[i] = "iiiii";
    }
    if (stringArr[i] === "U") {
      vowelss.push(stringArr[i]);
      stringArr[i] = "iiiii";
    }
    if (stringArr[i] === "u") {
      vowelss.push(stringArr[i]);
      stringArr[i] = "iiiii";
    }
  }
  const barcaa = vowelss.reverse();
  let firstIndex = 0;
  const result = stringArr.map((element) => {
    if (element === "iiiii") {
      const tempp = barcaa[firstIndex];
      firstIndex++;
      return tempp;
    }
    return element;
  });
  return result.join("");
};

console.log(reverseVowels("a a"));
console.log(reverseVowels("IceCreAm"));
console.log(reverseVowels("leetcode"));
console.log(reverseVowels("boluwatife"));
