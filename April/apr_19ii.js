// 2024. Maximize the Confusion of an Exam

const maxConsecutiveAnswers = function (answerKey, k) {
  let n = answerKey.length;

  const longestt = function (s, k, target) {
    let left = 0;
    let flip_count = 0;
    let max = 0;
    for (let i = 0; i < n; i++) {
      if (s[i] === target) flip_count++;

      while (flip_count > k) {
        if (s[left] === target) flip_count--;
        left++;
      }
      max = Math.max(max, i - left + 1);
    }
    return max;
  };
  let tt = longestt(answerKey, k, "T");
  let ff = longestt(answerKey, k, "F");

  return Math.max(tt, ff);
};

console.log(maxConsecutiveAnswers("TTFF", 2));
console.log(maxConsecutiveAnswers("TFFT", 1));
console.log(maxConsecutiveAnswers("TTFTTFTT", 1));
