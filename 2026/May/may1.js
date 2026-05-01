//  3606. Coupon Code Validator

const validateCoupons = function (code, businessLine, isActive) {
  function isValidString(str) {
    return /^[A-Za-z0-9_]+$/.test(str);
  }

  let business = ["electronics", "grocery", "pharmacy", "restaurant"];
  let ans = [];
  for (let i = 0; i < code.length; i++) {
    if (
      isValidString(code[i]) &&
      isActive[i] &&
      business.includes(businessLine[i])
    ) {
      ans.push([business.indexOf(businessLine[i]), businessLine[i], code[i]]);
    }
  }

  ans.sort((a, b) => a[0] - b[0]);
  ans.sort();
  let result = [];
  for (const temp of ans) result.push(temp[2]);

  return result;
  return ans;
};

console.log(
  validateCoupons(
    ["SAVE20", "", "PHARMA5", "SAVE@20"],
    ["restaurant", "grocery", "pharmacy", "restaurant"],
    [true, true, true, true],
  ),
);
console.log(
  validateCoupons(
    ["GROCERY15", "ELECTRONICS_50", "DISCOUNT10"],
    ["grocery", "electronics", "invalid"],
    [false, true, true],
  ),
);
console.log(
  validateCoupons(
    [
      "pBXoMqBU0_aMgc9F8dy6TaSzza3KjSJFjxZa_NuyMjzEBR7fJNwpGHh7lzuoZvQeEUeo6YumHmIOjjchXlzSVa4ItdyDOImQgm",
      "P8rIIUl35MW8yrqRbO0N_IITptYOxz9tOCbPL6d1aIF_hM2sapaDtUzNpmAZRmJQB1WgjLh8bdYADuSRSU21OzttUkq73qiA66",
      "aFWkYookQlHYMXzhVGxbnrXIl1810ws3qHtketHSECHqJoktWXVZGc6ZyeOuzA_VL9zFL9znpIHwbkwJF2bOPQqsz3_0PYgETJ",
    ],
    ["pharmacy", "invalid", "pharmacy"],
    [true, true, true],
  ),
);
