// 49. Group Anagrams

const groupAnagrams = function (strs) {
  const map = new Map();

  for (let strr of strs) {
    let sort_strr = strr.split("").sort().join("");

    if (!map.has(sort_strr)) {
      map.set(sort_strr, []);
    }
    map.get(sort_strr).push(strr);
  }
  return [...map.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
