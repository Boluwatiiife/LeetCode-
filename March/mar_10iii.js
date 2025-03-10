// 2525. Categorize Box According to Criteria

const categorizeBox = function (length, width, height, mass) {
  let volume = length * width * height;

  let arr = [];
  if (length >= 10000 || width >= 10000 || height >= 10000 || mass >= 10000) {
    arr.push("Bulky");
  }
  if (volume >= 1000000000) {
    arr.push("Bulky");
  }
  if (mass >= 100) {
    arr.push("Heavy");
  }

  arr = [...new Set(arr)];

  if (arr.length >= 2) return "Both";
  if (arr.length === 0) return "Neither";
  if (arr[0] === "Bulky") return "Bulky";
  if (arr[0] === "Heavy") return "Heavy";
};

console.log(categorizeBox(1000, 35, 700, 300));
console.log(categorizeBox(200, 50, 800, 50));
console.log(categorizeBox(660, 36898, 81019, 248));
