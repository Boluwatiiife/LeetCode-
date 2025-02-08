// 1184. Distance Between Bus Stops

const distanceBetweenBusStops = function (distance, start, destination) {
  if (start > destination) [start, destination] = [destination, start];

  let clock_wise_distance = distance
    .slice(start, destination)
    .reduce((a, b) => a + b);
  //   return clock_wise_distance;
  let total_distance = distance.reduce((a, b) => a + b);
  let counter_clockwise_distance = total_distance - clock_wise_distance;
  return Math.min(clock_wise_distance, counter_clockwise_distance);
};

console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 1));
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 2));
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 3));
console.log(distanceBetweenBusStops([3, 5, 6, 0, 2, 7], 0, 4));
// console.log(
//   distanceBetweenBusStops([0, zero, 1, one, 2, two, 3, three, 4, four], 0, 3)
// );
