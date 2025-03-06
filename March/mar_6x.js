// 2325. Decode the Message

const decodeMessage = function (key, message) {
  let unqiue_key = new Set(key);
  let temp = message.split("");
  let arr = [...unqiue_key];
  arr = arr.filter((xx) => xx !== " ");

  let resultt = [];
  let sum = "";
  for (let j = 0; j < temp.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (temp[j] === arr[i]) {
        sum = sum + String.fromCharCode(96 + (i + 1));
      }
    }
    resultt.push(sum);
    sum = "";
  }
  return resultt.map((char) => (char === "" ? " " : char)).join("");
};

console.log(
  decodeMessage(
    "the quick brown fox jumps over the lazy dog",
    "vkbs bs t suepuv"
  )
);
console.log(
  decodeMessage(
    "eljuxhpwnyrdgtqkviszcfmabo",
    "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
  )
);
console.log(
  decodeMessage(
    "abcdefghijklmnopqrstuvccwsssxyzzzcdsc",
    "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
  )
);
