// 1078. Occurrences After Bigram

const findOcurrences = function (text, first, second) {
  const arr = text.split(" ");
  let anss = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === first && arr[i + 1] === second && arr.includes(arr[i + 2])) {
      anss.push(arr[i + 2]);
    }
  }
  return anss;
};

console.log(
  findOcurrences("alice is a good girl she is a good student", "a", "good")
);
console.log(findOcurrences("we will we will rock you", "we", "will"));
console.log(
  findOcurrences(
    "ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv ypkk",
    "lnlqhmaohv",
    "ypkk"
  )
);
