// 1910. Remove All Occurrences of a Substring

const removeOccurrences = function (s, part) {
  while (s.includes(part)) {
    s = s.replace(`${part}`, "");
  }
  return s;
};

console.log(removeOccurrences("daabcbaabcbc", "abc"));
console.log(removeOccurrences("axxxxyyyyb", "xy"));
console.log(removeOccurrences("axxxxyyyyb", "ab"));
