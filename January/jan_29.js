// 599. Minimum Index Sum of Two Lists

findRestaurant = function (list1, list2) {
  let arr = [];
  for (i = 0; i < list1.length; i++) {
    for (j = 0; j < list2.length; j++) {
      if (list1[i] === list2[j]) {
        let index_sum = i + j;
        arr.push(list1[i], index_sum);
      }
    }
  }
  let numm = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      numm.push(arr[i]);
    }
  }
  let minn = Math.min(...numm);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === minn) {
      result.push(arr[i - 1]);
    }
  }
  return result;
};

console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    [
      "Piatti",
      "The Grill at Torrey Pines",
      "Hungry Hunter Steakhouse",
      "Shogun",
    ]
  )
);
console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Shogun", "Burger King"]
  )
);
console.log(findRestaurant(["happy", "sad", "good"], ["sad", "happy", "good"]));
