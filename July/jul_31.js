// 898. Bitwise ORs of Subarrays

const subarrayBitwiseORs = function (arr) {
  let unique_or_values = new Set();
  let current_or = 0;

  for (let i = 0; i < arr.length; i++) {
    current_or |= arr[i];
    let subarray_or = 0;
    for (let j = i; j >= 0; j--) {
      subarray_or |= arr[j];
      unique_or_values.add(subarray_or);
      if (subarray_or === current_or) break;
    }
  }
  return unique_or_values.size;
};

console.log(subarrayBitwiseORs([0]));
console.log(subarrayBitwiseORs([1, 1, 2]));
console.log(subarrayBitwiseORs([1, 2, 4]));
