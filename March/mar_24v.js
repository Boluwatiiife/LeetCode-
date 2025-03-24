// 5. Longest Palindromic Substring

const longestPalindrome = function (s) {
  let maxx = 0;

  let arr = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let temp = s.slice(i, j + 1);
      let reve = "";
      for (let x = temp.length - 1; x >= 0; x--) {
        reve += temp[x];
      }
      if (temp === reve) {
        arr.push(temp);
        maxx = Math.max(maxx, temp.length);
      }
    }
  }
  for (char of arr) {
    if (char.length === maxx) return char;
  }
  return "";
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(
  longestPalindrome(
    "azwdzwmwcqzgcobeeiphemqbjtxzwkhiqpbrprocbppbxrnsxnwgikiaqutwpftbiinlnpyqstkiqzbggcsdzzjbrkfmhgtnbujzszxsycmvipjtktpebaafycngqasbbhxaeawwmkjcziybxowkaibqnndcjbsoehtamhspnidjylyisiaewmypfyiqtwlmejkpzlieolfdjnxntonnzfgcqlcfpoxcwqctalwrgwhvqvtrpwemxhirpgizjffqgntsmvzldpjfijdncexbwtxnmbnoykxshkqbounzrewkpqjxocvaufnhunsmsazgibxedtopnccriwcfzeomsrrangufkjfzipkmwfbmkarnyyrgdsooosgqlkzvorrrsaveuoxjeajvbdpgxlcrtqomliphnlehgrzgwujogxteyulphhuhwyoyvcxqatfkboahfqhjgujcaapoyqtsdqfwnijlkknuralezqmcryvkankszmzpgqutojoyzsnyfwsyeqqzrlhzbc"
  )
);
