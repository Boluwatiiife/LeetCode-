// 3606. Coupon Code Validator

const validateCoupons = function (code, businessLine, isActive) {
  function isValidString(str) {
    return /^[A-Za-z0-9_]+$/.test(str);
  }
  const check = { electronics: [], grocery: [], pharmacy: [], restaurant: [] };
  let ans = [];

  for (let i = 0; i < code.length; i++) {
    if (isValidString(code[i]) && check[businessLine[i]] && isActive[i]) {
      check[businessLine[i]].push(code[i]);
    }
  }

  for (key in check) {
    ans.push(...check[key].sort());
  }

  return ans;
};

console.log(
  validateCoupons(
    ["SAVE20", "", "PHARMA5", "SAVE@20"],
    ["restaurant", "grocery", "pharmacy", "restaurant"],
    [true, true, true, true]
  )
);
console.log(
  validateCoupons(
    ["GROCERY15", "ELECTRONICS_50", "DISCOUNT10"],
    ["grocery", "electronics", "invalid"],
    [false, true, true]
  )
);
console.log(
  validateCoupons(["1OFw", "0MvB"], ["electronics", "pharmacy"], [true, true])
);
console.log(
  validateCoupons(
    [
      "pBXoMqBU0_aMgc9F8dy6TaSzza3KjSJFjxZa_NuyMjzEBR7fJNwpGHh7lzuoZvQeEUeo6YumHmIOjjchXlzSVa4ItdyDOImQgm",
      "P8rIIUl35MW8yrqRbO0N_IITptYOxz9tOCbPL6d1aIF_hM2sapaDtUzNpmAZRmJQB1WgjLh8bdYADuSRSU21OzttUkq73qiA66",
      "aFWkYookQlHYMXzhVGxbnrXIl1810ws3qHtketHSECHqJoktWXVZGc6ZyeOuzA_VL9zFL9znpIHwbkwJF2bOPQqsz3_0PYgETJ",
    ],
    ["pharmacy", "invalid", "pharmacy"],
    [true, true, true]
  )
);
