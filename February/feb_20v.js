// 1592. Rearrange Spaces Between Words

const reorderSpaces = function (text) {
  let words = text.trim().split(/\s+/);
  let total_space = (text.match(/ /g) || []).length;

  if (words.length === 1) {
    return words[0] + " ".repeat(total_space);
  }

  let space_btw = Math.floor(total_space / (words.length - 1));
  let extra_spaces = total_space % (words.length - 1);

  return words.join(" ".repeat(space_btw)) + " ".repeat(extra_spaces);
};

console.log(reorderSpaces("  this   is  a sentence "));
console.log(reorderSpaces(" practice   makes   perfect"));
console.log(reorderSpaces("  hello"));
