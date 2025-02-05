// 917. Reverse Only Letters

const reverseOnlyLetters = function (s) {
  const stringg = s.split("");
  let left = 0;
  let right = stringg.length - 1;

  // move left pointer until it finds a letter
  while (left < right) {
    while (left < right && !/^[a-zA-Z]$/.test(stringg[left])) {
      left++;
    }

    // move right pointer until it finds a letter
    while (left < right && !/^[a-zA-Z]$/.test(stringg[right])) {
      right--;
    }

    // swap letters at left and right
    [stringg[left], stringg[right]] = [stringg[right], stringg[left]];

    // move pointers inward
    left++;
    right--;
  }
  return stringg.join("");
};

console.log(reverseOnlyLetters("ab-cd"));
console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));
console.log(reverseOnlyLetters("Testing-Leet=code-Q!"));
console.log(reverseOnlyLetters("Boluwatife-the-backend-wizard!"));

const onlyReverseStringg = function (s) {
  let stack = s.split("").filter((x) => /[a-zA-Z]/.test(x));
  return s
    .split("")
    .map((x) => (/[a-zA-Z]/.test(x) ? stack.pop() : x))
    .join("");
};
console.log(onlyReverseStringg("ab-cd"));
console.log(onlyReverseStringg("a-bC-dEf-ghIj"));
console.log(onlyReverseStringg("Testing-Leet=code-Q!"));
console.log(onlyReverseStringg("Boluwatife-the-backend-wizard!"));
