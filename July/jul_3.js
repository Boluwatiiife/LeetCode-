// 409. Longest Palindrome

const longestPalindrome = function (s) {
  let freq = new Map();
  for (const letter of s) {
    freq.set(letter, (freq.get(letter) || 0) + 1);
  }

  let ans = 0;
  let hasOdd = false;

  for (const count of freq.values()) {
    if (count % 2 === 0) {
      ans += count;
    } else {
      ans += count - 1;
      hasOdd = true;
    }
  }
  return hasOdd ? ans + 1 : ans;
};

console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("abccccddd"));
console.log(longestPalindrome("abcccccddd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("bananas"));
console.log(
  longestPalindrome(
    "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
  )
);
