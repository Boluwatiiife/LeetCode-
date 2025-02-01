// 100. Same Tree

/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
*/

const isSameTree = function (p, q) {
  let together = [];
  for (let i = 0; i < p.length; i++) {
    together.push(p[i]);
  }
  for (let i = 0; i < q.length; i++) {
    together.push(q[i]);
  }
  //   for (let i = 0; i < together.length; i++) {
  //     for (let j = 0; j < together.length; j++) {
  //       if (together[j] > together[j + 1]) {
  //         let temp = together[j];
  //         together[j] = together[j + 1];
  //         together[j + 1] = temp;
  //       }
  //     }
  //   }
  let xxx = together.length - p.length;

  // for(let x=0;x<xxx;x++){
  //     for(let y=)
  // }
  return together;
  //   return xxx;
};

console.log(isSameTree([1, 2, 3], [1, 2, 3]));
console.log(isSameTree([1, 2], [1, null, 3]));
console.log(isSameTree([1, 2, 1], [1, 1, 2]));
