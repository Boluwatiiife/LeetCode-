// 2451. Odd String Difference

const oddString = function (words) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";

  let arr = [];
  for (let i = 0; i < words.length; i++) {
    let temp = words[i].split("");
    arr.push([
      alpha.indexOf(temp[1]) - alpha.indexOf(temp[0]),
      alpha.indexOf(temp[2]) - alpha.indexOf(temp[1]),
    ]);
  }
  let count = new Map();
  for (num of arr) {
    const key = JSON.stringify(num);
    count.set(key, (count.get(key) || 0) + 1);
  }
  for (let i = 0; i < arr.length; i++) {
    let temp = JSON.stringify(arr[i]);
    if (count.get(temp) === 1) {
      return words[i];
    }
  }
};

console.log(oddString(["adc", "wzy", "abc"]));
console.log(oddString(["aaa", "bob", "ccc", "ddd"]));
console.log(
  oddString([
    "mll",
    "edd",
    "jii",
    "tss",
    "fee",
    "dcc",
    "nmm",
    "abb",
    "utt",
    "zyy",
    "xww",
    "tss",
    "wvv",
    "xww",
    "utt",
  ])
);
console.log(
  oddString([
    "nnnmmmnnmmmmmmmmmmnm",
    "iiihhhiihhhhhhhhhhih",
    "aaaabbbbbbaaabaaaabb",
    "qqqpppqqppppppppppqp",
    "eeedddeedddddddddded",
    "eeedddeedddddddddded",
    "iiihhhiihhhhhhhhhhih",
    "lllkkkllkkkkkkkkkklk",
    "sssrrrssrrrrrrrrrrsr",
    "sssrrrssrrrrrrrrrrsr",
    "jjjiiijjiiiiiiiiiiji",
    "nnnmmmnnmmmmmmmmmmnm",
    "xxxwwwxxwwwwwwwwwwxw",
    "eeedddeedddddddddded",
    "zzzyyyzzyyyyyyyyyyzy",
    "wwwvvvwwvvvvvvvvvvwv",
    "cccbbbccbbbbbbbbbbcb",
    "xxxwwwxxwwwwwwwwwwxw",
    "cccbbbccbbbbbbbbbbcb",
    "yyyxxxyyxxxxxxxxxxyx",
    "hhhggghhgggggggggghg",
  ])
);
