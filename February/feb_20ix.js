// 1624. Largest Substring Between Two Equal Characters

const maxLengthBetweenEqualCharacters = function (s) {
  let arr = s.split("");
  //   return arr;

  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[j] === arr[i]) {
        temp.push(i - j);
      }
    }
  }
  if (temp.length < 1) return -1;

  //   return temp;
  let anss = Math.max(...temp);
  return anss - 1;
};

console.log(maxLengthBetweenEqualCharacters("aa"));
console.log(maxLengthBetweenEqualCharacters("abca"));
console.log(maxLengthBetweenEqualCharacters("cbzxy"));
console.log(maxLengthBetweenEqualCharacters("abcaxsdfdsx"));
