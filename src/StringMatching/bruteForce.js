function stringMatching(P, T) {
  for (let i=0; i <= T.length - P.length; i++) {
    if (T[i] === P.charAt(0)) {
      let j = 0;
      while(j < P.length && P[j] === T[i + j]) {
        j++;
      }
      if (j === P.length) {
        return i;
      }
    }
  }
}


let P = 'abc';
let T = 'efgaabecijklabc';
const index = stringMatching(P, T);
console.log(index);