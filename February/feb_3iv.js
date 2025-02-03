// 796. Rotate String

const rotateString = function (s, goal) {
  if (s === goal) return true;
  let stringg = s.split("");
  for (let i = 0; i < stringg.length * 2; i++) {
    let letter = stringg[0];
    stringg = stringg.filter((_, index) => index !== 0);
    stringg.push(letter);
    let str = stringg.join("");
    if (str === goal) {
      return true;
    } else {
      i++;
    }
  }
  return false;
};

console.log(rotateString("abcde", "abcde"));
console.log(rotateString("abcde", "bcdea"));
console.log(rotateString("abcde", "cdeab"));
console.log(rotateString("abcde", "abdced"));
console.log(rotateString("gcmbf", "fgcmb"));

/* i can't believe i racked my brains for my code,
 when there is a very very simple solution,
  not easy being a newbie, lol */

// time efficient solution
const string_rotate = function (s, goal) {
  return (s + s).includes(goal) && s.length === goal.length;
};

console.log(string_rotate("abcde", "abcde"));
console.log(string_rotate("abcde", "bcdea"));
console.log(string_rotate("abcde", "cdeab"));
console.log(string_rotate("abcde", "abdced"));
console.log(string_rotate("gcmbf", "fgcmb"));
