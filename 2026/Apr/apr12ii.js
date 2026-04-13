// 3894. Traffic Signal Color

const trafficSignal = function (timer) {
  if (timer === 0) return "Green";
  if (timer === 30) return "Orange";
  if (30 < timer && timer <= 90) return "Red";
  return "Invalid";
};

console.log(trafficSignal(60));
console.log(trafficSignal(5));
