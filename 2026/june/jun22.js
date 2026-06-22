// 1189. Maximum Number of Balloons

const maxNumberOfBalloons = function (text) {
  let freq = new Map();
  for (const char of text) freq.set(char, (freq.get(char) || 0) + 1);
  let arr = [];
  arr.push(freq.get("b") / 1);
  arr.push(freq.get("a") / 1);
  arr.push(freq.get("l") / 2);
  arr.push(freq.get("o") / 2);
  arr.push(freq.get("n") / 1);

  const minn = Math.min(...arr);
  if (minn === NaN) return 0;
  return minn >= 1 ? Math.floor(minn) : 0;
};

console.log(maxNumberOfBalloons("nlaebolko"));
console.log(maxNumberOfBalloons("loonbalxballpoon"));
console.log(maxNumberOfBalloons("leetcode"));
console.log(maxNumberOfBalloons("balloonlloob"));
console.log(maxNumberOfBalloons("ballon"));
console.log(maxNumberOfBalloons("balllllllllllloooooooooon"));
console.log(
  maxNumberOfBalloons(
    "krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw",
  ),
);
