// 482. Licence Key Formatting

const licenseKeyFormatting = function (s, k) {
  const withoutt = s.replace(/-/g, "").toUpperCase();
  const arr = withoutt.split("");
  for (let i = arr.length - k; i > 0; i -= k) {
    arr.splice(i, 0, "-");
    i + arr.length - k;
  }
  return arr.join("");
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));
console.log(licenseKeyFormatting("2-5g-3-J", 2));

const keyyFormattingg = function (s, k) {
  let cleanString = s.replace(/-/g, "").toUpperCase();

  // Step 2: Initialize an array to store the reformatted string
  let result = [];
  let len = cleanString.length;

  // Step 3: Iterate from the end, adding groups of size k
  for (let i = len; i > 0; i -= k) {
    // Slice the last k characters or fewer for the first group
    let start = Math.max(0, i - k);
    result.push(cleanString.slice(start, i));
  }

  //   return result;
  // Step 4: Join the groups with dashes and return the result
  return result.reverse().join("-");
};

console.log(keyyFormattingg("5F3Z-2e-9-w", 4));
console.log(keyyFormattingg("2-5g-3-J", 2));
console.log(keyyFormattingg("dede-dd-dd-sdsa-aa", 8));
