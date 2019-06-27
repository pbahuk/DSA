
function getPatternTable(P) {
  const patternTable = [0];
  let prefixIndex = 0;
  let suffixIndex = 1;

  while(suffixIndex < P.length) {
    if (P[prefixIndex] === P[suffixIndex]) {
      patternTable[suffixIndex] = prefixIndex + 1;
      prefixIndex++;
      suffixIndex++;
    } else if (prefixIndex === 0) {
      patternTable[suffixIndex] = 0;
      suffixIndex++;
    } else {
      patternTable[suffixIndex] = patternTable[prefixIndex -1];
    }
  }
  return patternTable;
}

function KMP(P, T) {
  let n = T.length;
  let m = P.length;
  const patternTable = getPatternTable(P);
  let textIndex=0, patternIndex = 0;

  while(textIndex < n) {
    if (T[textIndex] === P[patternIndex]) {
      // Match.
      if(patternIndex === m-1) {
        return (textIndex - m) + 1;
      }
      textIndex++;
      patternIndex++;
    } else if (patternIndex > 0) {
      patternIndex = patternTable[patternIndex -1];
    } else {
      patternIndex = 0;
      textIndex++;
    }
  }

}

let P = 'abc';
let T = 'efgaabecijklabc';
const index = KMP(P, T);
console.log(index);