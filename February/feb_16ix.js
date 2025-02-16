// 1491. Average Salary Excluding the Minimum and Maximum Salary

const average = function (salary) {
  let maxx = Math.max(...salary);
  let minn = Math.min(...salary);

  for (let i = salary.length - 1; i >= 0; i--) {
    if (salary[i] === maxx) {
      salary.splice(i, 1);
    }
    if (salary[i] === minn) {
      salary.splice(i, 1);
    }
  }
  let anss = salary.reduce((a, b) => a + b) / salary.length;
  return anss;
};

console.log(average([4000, 3000, 1000, 2000]));
console.log(average([1000, 2000, 3000]));
