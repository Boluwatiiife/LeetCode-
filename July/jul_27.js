// 2047. Number of Valid Words in a Sentence

const countValidWords = function (sentence) {
  const arr = sentence.split(" ").filter((xx) => xx !== "");
  const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const sign = [".", ",", "!"];
  let count = 0;

  for (const word of arr) {
    const total = word.length;
    if (word[0] === "-") continue;
    if (word[total - 1] === "-") continue;
    if (sign.includes(word[0]) && total > 1) continue;

    let numss = 0;
    let hyphen = 0;
    let signs = 0;

    for (const char of word) {
      if (nums.includes(char)) numss++;
      else if (sign.includes(char)) signs++;
      else if (char === "-") hyphen++;
    }
    if (numss > 0 || hyphen > 1 || signs > 1) continue;
    if (signs === 1 && !sign.includes(word[total - 1])) continue;
    let dex = word.indexOf("-");
    if (word.includes("-") && sign.includes(word[dex + 1])) continue;
    count++;
  }

  return count;
};

console.log(countValidWords("cat. and  dog"));
console.log(countValidWords("ca!t and  dog"));
console.log(countValidWords("cat and  dog"));
console.log(countValidWords("!this  1-s b8d!"));
console.log(countValidWords("alice and  bob are playing stone-game10"));
console.log(
  countValidWords("he bought 2 pencils, 3 erasers, and 1  pencil-sharpener.")
);
console.log(countValidWords("!"));
console.log(countValidWords("a-b-c"));
console.log(
  countValidWords(
    " 62   nvtk0wr4f  8 qt3r! w1ph 1l ,e0d 0n 2v 7c.  n06huu2n9 s9   ui4 nsr!d7olr  q-, vqdo!btpmtmui.bb83lf g .!v9-lg 2fyoykex uy5a 8v whvu8 .y sc5 -0n4 zo pfgju 5u 4 3x,3!wl  fv4   s  aig cf j1 a i  8m5o1  !u n!.1tz87d3 .9    n a3  .xb1p9f  b1i a j8s2 cugf l494cx1! hisceovf3 8d93 sg 4r.f1z9w   4- cb r97jo hln3s h2 o .  8dx08as7l!mcmc isa49afk i1 fk,s e !1 ln rt2vhu 4ks4zq c w  o- 6  5!.n8ten0 6mk 2k2y3e335,yj  h p3 5 -0  5g1c  tr49, ,qp9 -v p  7p4v110926wwr h x wklq u zo 16. !8  u63n0c l3 yckifu 1cgz t.i   lh w xa l,jt   hpi ng-gvtk8 9 j u9qfcd!2  kyu42v dmv.cst6i5fo rxhw4wvp2 1 okc8!  z aribcam0  cp-zp,!e x  agj-gb3 !om3934 k vnuo056h g7 t-6j! 8w8fncebuj-lq    inzqhw v39,  f e 9. 50 , ru3r  mbuab  6  wz dw79.av2xp . gbmy gc s6pi pra4fo9fwq k   j-ppy -3vpf   o k4hy3 -!..5s ,2 k5 j p38dtd   !i   b!fgj,nx qgif "
  )
); // 49

const temp = "q-,";
// console.log(temp.indexOf("-"));
