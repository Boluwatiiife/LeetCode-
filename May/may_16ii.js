// 1023. Camelcase Matching

const camelMatch = function (queries, pattern) {
  function checkCheckk(one, two) {
    const n = one.length;
    const m = two.length;

    let i = 0,
      j = 0;
    while (i < n) {
      if (j < m && one[i] === two[j]) {
        i++;
        j++;
      } else if (one[i] >= "a" && one[i] <= "z") {
        i++;
      } else return false;
    }
    return j === m;
  }
  return queries.map((temp) => checkCheckk(temp, pattern));
};

console.log(
  camelMatch(
    ["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"],
    "FB"
  )
);
console.log(
  camelMatch(
    ["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"],
    "FoBa"
  )
);
console.log(
  camelMatch(
    ["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"],
    "FoBaT"
  )
);
console.log(
  camelMatch(["CompetitiveProgramming", "CounterPick", "ControlPanel"], "CooP")
);
console.log(
  camelMatch(
    [
      "aksvbjLiknuTzqon",
      "ksvjLimflkpnTzqn",
      "mmkasvjLiknTxzqn",
      "ksvjLiurknTzzqbn",
      "ksvsjLctikgnTzqn",
      "knzsvzjLiknTszqn",
    ],
    "ksvjLiknTzqn"
  )
);
camelMatch(
  [
    "uAxaqlzahfialcezsLfj",
    "cAqlzyahaslccezssLfj",
    "AqlezahjarflcezshLfj",
    "AqlzofahaplcejuzsLfj",
    "tAqlzahavslcezsLwzfj",
    "AqlzahalcerrzsLpfonj",
    "AqlzahalceaczdsosLfj",
    "eAqlzbxahalcezelsLfj",
  ],
  "AqlzahalcezsLfj"
);
