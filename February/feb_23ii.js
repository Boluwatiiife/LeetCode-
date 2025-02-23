// 1773. Count Items Matching a Rule

const countMatches = function (items, ruleKey, ruleValue) {
  let resultt = 0;
  for ([type, color, namee] of items) {
    if (ruleKey === "type" && type === ruleValue) {
      resultt++;
    }
    if (ruleKey === "color" && color === ruleValue) {
      resultt++;
    }
    if (ruleKey === "name" && namee === ruleValue) {
      resultt++;
    }
  }

  return resultt;
};

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
);
console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "phone"],
      ["phone", "gold", "iphone"],
    ],
    "type",
    "phone"
  )
);

// optimized solution

const match_count = function (items, ruleKey, ruleValue) {
  const rule_index = ruleKey === "type" ? 0 : ruleKey === "color" ? 1 : 2;
  return items.filter((item) => item[rule_index] === ruleValue).length;
};
console.log(
  match_count(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
);
console.log(
  match_count(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "phone"],
      ["phone", "gold", "iphone"],
    ],
    "type",
    "phone"
  )
);
