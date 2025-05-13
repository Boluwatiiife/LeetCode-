// 809. Expressive Words

const expressiveWords = function (s, words) {
  function checkk(one, two) {
    let onee = [];
    let string = one[0];
    for (let i = 1; i <= one.length; i++) {
      if (one[i] === string[string.length - 1]) string += one[i];
      else if (one[i] !== string[string.length - 1]) {
        onee.push(string);
        string = one[i];
      } else {
        onee.push(string);
      }
    }
    let twoo = [];
    let strin = two[0];
    for (let i = 1; i <= two.length; i++) {
      if (two[i] === strin[strin.length - 1]) strin += two[i];
      else if (two[i] !== strin[strin.length - 1]) {
        twoo.push(strin);
        strin = two[i];
      } else {
        twoo.push(strin);
      }
    }
    if (onee.length !== twoo.length) return false;
    for (let i = 0; i < onee.length; i++) {
      let firr = onee[i],
        secc = twoo[i];
      if (firr[0] !== secc[0]) return false;
      if (firr.length === secc.length) continue;
      if (firr.length > 3 && secc.length < firr.length) continue;
      if (firr.length < 3 && secc.length > 0) return false;
      if (secc.length > firr.length) return false;
    }

    return true;
  }
  let count = 0;
  for (char of words) {
    if (checkk(s, char)) count++;
  }
  return count;
};

console.log(expressiveWords("heeellooo", ["hello", "hi", "helo"]));
console.log(expressiveWords("zzzzzyyyyy", ["zzyy", "zy", "zyy"]));
console.log(expressiveWords("aaa", ["aaaa"]));
console.log(expressiveWords("heeelllooo", ["hellllo"]));
console.log(expressiveWords("heeellooo", ["axxxrrzzz"]));
