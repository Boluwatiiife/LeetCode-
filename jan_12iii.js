// 83. Remove Duplicates from Sorted List

/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
*/

const deleteDuplicates = function (head) {
  let x = 0;
  while (x < head.length - 1) {
    for (let i = 0; i < head.length; i++) {
      for (let j = 0; j < head.length; j++) {
        if (i !== j && head[i] === head[j]) {
          head.splice(j, 1);
          j = Math.max(j - 1, 0);
        } else {
          x++;
        }
      }
    }
  }
  return head;
};

// console.log(deleteDuplicates([1, 1, 2, 2, 2, 2, 2, 2]));
// console.log(deleteDuplicates([1, 1, 2, 3, 3]));
// console.log(deleteDuplicates([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4]));

// listNode solution
const duplicatesss = function (head) {
  let current = head;
  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};
console.log(duplicatesss([1, 1, 2, 2, 2, 2, 2, 2]));
console.log(duplicatesss([1, 1, 2, 3, 3]));
console.log(duplicatesss([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4]));
console.log(
  duplicatesss([6, 6, 6, 6, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9])
);
