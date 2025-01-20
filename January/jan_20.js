// 383. Ransom Note.

/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
*/

const canConstruct = function (ransomNote, magazine) {
  let ransomm = ransomNote.split("");
  let magg = magazine.split("");

  let arr = [];
  for (let i = 0; i < ransomm.length; i++) {
    for (let j = 0; j < magg.length; j++) {
      if (ransomm[i] === magg[j]) {
        arr.push(ransomm[i]);
        magg.splice(j, 1);
        break;
      }
    }
  }
  if (ransomm.length === arr.length) return true;
  return false;
};

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));
console.log(
  canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj")
);

const ransom_and_magg = function (ransomNote, magazine) {
  const char_count = new Map();

  for (const char of magazine) {
    char_count.set(char, (char_count.get(char) || 0) + 1);
  }

  for (const char of ransomNote) {
    if (!char_count.has(char) || char_count.get(char) === 0) {
      return false;
    }
    char_count.set(char, char_count.get(char) - 1);
  }
  return true;
};

console.log(ransom_and_magg("a", "b"));
console.log(ransom_and_magg("aa", "ab"));
console.log(ransom_and_magg("aa", "aab"));
console.log(
  ransom_and_magg("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj")
);
