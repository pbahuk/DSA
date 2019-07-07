function capitalizeWords(arr) {
  console.log(arr);
  if (!arr.length) {
    return [];
  }
  return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
}

var words = ["i", "am", "learning", "recursion"];
capitalizeWords(words);
