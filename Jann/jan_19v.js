// 3813. Vowel-Consonant Score

const vowelConsonantScore = function (s) {
  const con = "qwrtypsdfghjklmnbvcxz";
  const vol = "aeiou";
  let c = 0,
    v = 0;

  for (const temp of s) {
    if (con.includes(temp)) c++;
    else if (vol.includes(temp)) v++;
  }

  return c > 0 ? Math.floor(v / c) : 0;
};

console.log(vowelConsonantScore("cooear"));
console.log(vowelConsonantScore("axeyizou"));
console.log(vowelConsonantScore("au 123"));
