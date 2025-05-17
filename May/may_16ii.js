// 1023. Camelcase Matching

const camelMatch = function (queries, pattern) {
  function checkCheck(query, patt) {
    const n = query.length;
    const m = patt.length;
    let i = 0,
      j = 0;

    while (i < n) {
      if (j < m && query[i] === patt[j]) {
        i++;
        j++;
      } else if (query[i] >= "a" && query[i] <= "z") i++;
      else return false;
    }
    return j === m;
  }
  return queries.map((temp) => checkCheck(temp, pattern));
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
