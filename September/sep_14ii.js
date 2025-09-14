// 966. Vowel Spellchecker

const spellchecker = function (wordlist, queries) {
  const exact = new Set(wordlist);
  const lower_map = new Map();
  const vowel_map = new Map();

  const is_vowel = (char) => "aeiou".includes(char);
  const mask_vowel = (char) => {
    char.toLowerCase();
    let out = "";
    for (let ch of char) {
      out += is_vowel(ch) ? "*" : ch;
    }
    return out;
  };

  for (let word of wordlist) {
    const temp = word.toLowerCase();
    if (!lower_map.has(temp)) {
      lower_map.set(temp, word);
    }
    const mm = mask_vowel(temp);
    if (!vowel_map.has(mm)) {
      vowel_map.set(mm, word);
    }
  }

  let ans = [];
  for (let temp of queries) {
    if (exact.has(temp)) {
      ans.push(temp);
      continue;
    }

    const one = temp.toLowerCase();
    if (lower_map.has(one)) {
      ans.push(lower_map.get(one));
      continue;
    }

    const two = mask_vowel(one);
    ans.push(vowel_map.get(two) || "");
  }

  return ans;
};

console.log(
  spellchecker(
    ["KiTe", "kite", "hare", "Hare"],
    [
      "kite",
      "Kite",
      "KiTe",
      "Hare",
      "HARE",
      "Hear",
      "hear",
      "keti",
      "keet",
      "keto",
    ]
  )
);
console.log(spellchecker(["yellow"], ["YellOw"]));
console.log(spellchecker(["zeo", "Zuo"], ["zuo"]));
