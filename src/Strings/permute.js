function permute(str) {
  console.log(typeof str);
  if (str.length < 2) {
    return str;
  }
  let permutations = [];

  console.log(str);

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let results = permute(str.slice(0, i) + str.slice(i + 1));

    for (let subPermutation of results) {
      permutations.push(char + subPermutation);
    }
  }
  return permutations;
}

permute("abc");
