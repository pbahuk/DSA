function countingSort(array) {
  const min = array.reduce((acc, element) => acc < element ? acc : element);
  const max = array.reduce((acc, element) => acc > element ? acc : element);
  const count = Array(max + 1).fill(0, min, max + 1);
  array.forEach(element => count[element]++);

  const sumCount = [...count];
  for (let i=min+1; i<=max; i++) {
    sumCount[i] += sumCount[i-1];
  }

  const result = [];
  array.forEach(element => {
    result[sumCount[element]] = element;
    sumCount[element]--;
  });
  return result.splice(1);
}


var array = [9, 4, 10, 8, 2, 4];
var sortedArray = countingSort(array);

console.log(sortedArray);