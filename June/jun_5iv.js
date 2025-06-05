// 1268. Search Suggestions System

const suggestedProducts = function (products, searchWord) {
  const check = products.sort();
  let ans = [];
  let string = "";
  let i = 0;

  while (string.length < searchWord.length) {
    string += searchWord[i];
    let left = 0;
    let right = check.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (check[mid].localeCompare(string) < 0) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    let arr = [];
    for (let i = left; i < Math.min(left + 3, check.length); i++) {
      if (check[i].startsWith(string)) arr.push(check[i]);
      else break;
    }
    ans.push(arr);
    i++;
  }
  return ans;
};

console.log(
  suggestedProducts(
    ["mobile", "mouse", "moneypot", "monitor", "mousepad"],
    "mouse"
  )
);
console.log(suggestedProducts(["havana"], "havana"));

// mobile;
// moneyPot;
// monitor;
// mouse;
// mousepad;
