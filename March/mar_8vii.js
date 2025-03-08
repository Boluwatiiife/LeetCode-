// 2418. Sort the People

const sortPeople = function (names, heights) {
  let arr = [];

  for (let i = 0; i < names.length; i++) {
    arr.push([names[i], heights[i]]);
  }

  arr = arr.sort((a, b) => b[1] - a[1]);
  let resultt = [];
  for ([nam, heig] of arr) {
    resultt.push(nam);
  }

  return resultt;
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]));
