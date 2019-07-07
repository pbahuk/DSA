function flatten(arr) {
  console.log(arr);
  if (!arr.length) {
    return [];
  }

  if (typeof arr[0] === "object") {
    console.log("Parts: ", [], arr);
    return flatten(arr[0]).concat(flatten(arr.slice(1)));
  } else {
    console.log("Parts: ", arr[0], arr);
    return [arr[0]].concat(flatten(arr.slice(1)));
  }
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
flatten([[1], [2], [3]]);
