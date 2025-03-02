// 2129. Capitalize the Title

const capitalizeTitle = function (title) {
  let word = title.split(" ");

  let arr = [];
  for (char of word) {
    char = char.toLowerCase();
    if (char.length > 2) {
      let temp = char.split("");
      temp[0] = temp[0].toUpperCase();
      temp = temp.join("");
      char = temp;
    }
    arr.push(char);
  }

  return arr.join(" ");
};

console.log(capitalizeTitle("capiTalIze tHe titLe"));
console.log(capitalizeTitle("First leTTeR of EACH Word"));
console.log(capitalizeTitle("i lOve leetcode"));
console.log(capitalizeTitle("besT backeNd deV TO come out Of NIGERIA"));

// optimized solution

const capitalizee = function (title) {
  return title
    .split(" ")
    .map((word) =>
      word.length <= 2
        ? word.toLowerCase()
        : word[0].toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");
};

console.log(capitalizee("capiTalIze tHe titLe"));
console.log(capitalizee("First leTTeR of EACH Word"));
console.log(capitalizee("i lOve leetcode"));
console.log(capitalizee("besT backeNd deV TO come out Of NIGERIA"));
