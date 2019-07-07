Array.prototype.myReduce = function(fn, startingValue) {
  let accumulator = startingValue === undefined ? this[0] : startingValue;
  const startingIndex = startingValue === undefined ? 1 : 0;
  console.log("index", startingIndex);

  for (let i = startingIndex; i < this.length; i++) {
    console.log(accumulator, this[i]);
    accumulator = fn(accumulator, this[i]);
  }
  return accumulator;
};

// Challenge 3
function map(array, callback) {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    results.push(callback(array[i]));
  }
  return results;
}

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  let results = [];
  forEach(array, element => {
    results.push(callback(element));
  });
  return results;
}

//Extension 2
function reduce(array, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : array[0];
  let index = initialValue !== undefined ? 0 : 1;

  for (let i = index; i < array.length; i++) {
    accumulator += callback(array[i]);
  }
  return accumulator;
}

//Extension 3
function intersection(...arrays) {
  let results = [];
  console.log(arrays);

  reduce(arrays, element => {}, []);
}

console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
);
// should log: [5, 15]

//Extension 4
function union(arrays) {}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
