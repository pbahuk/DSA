function addUptoN(n) {
  return (n * (n + 1)) / 2;
}

function addUptoNLoop(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

var time1 = performance.now();
addUptoN(100000000);
var time2 = performance.now();
console.log(`Time elapsed ${(time2 - time1) / 1000} seconds`);

var time1 = performance.now();
addUptoNLoop(100000000);
var time2 = performance.now();
console.log(`Time elapsed ${(time2 - time1) / 1000} seconds`);
