// 2. Add Two Numbers

const addTwoNumbers = function (l1, l2) {
  let one = "",
    two = "";
  for (let i = l1.length - 1; i >= 0; i--) {
    one += l1[i].toString();
  }
  for (let i = l2.length - 1; i >= 0; i--) {
    two += l2[i].toString();
  }
  let num = Number(one) + Number(two);
  num = num.toString().split("");

  let arrr = [];

  for (let i = num.length - 1; i >= 0; i--) {
    arrr.push(Number(num[i]));
  }

  return arrr;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
