// 2024. Maximize the Confusion of an Exam

const maxConsecutiveAnswers = function (answerKey, k) {
  function checkk(word, x, ff, tt) {
    const n = word.length;
    let no = 0;
    let maxx = 0;
    let left = 0;
    let right = 0;

    while (right < n) {
      if (word[right] === ff) {
        right++;
      } else {
        right++;
        no++;
      }
      let diff = right - left;
      if (no > x) {
        while (no > x) {
          if (word[left] === tt) {
            diff--;
            no--;
          }
          left++;
        }
      }
      maxx = Math.max(maxx, diff);
    }
    return maxx;
  }

  return Math.max(
    checkk(answerKey, k, "F", "T"),
    checkk(answerKey, k, "T", "F")
  );
};

console.log(maxConsecutiveAnswers("TTFF", 2));
console.log(maxConsecutiveAnswers("TFFT", 1));
console.log(maxConsecutiveAnswers("TTFTTFTT", 1));

// Binary search L from 1 to answerKey.length.

// For each candidate L, check if a window of size L can be made all 'T'
// or all 'F' with ≤ k flips.
