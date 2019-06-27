


function robinKarp(P, T) {
  let m = P.length, n = T.length;

  let pHash = 0, tHash = 0;
  for (let i=0; i<m; i++) {
    pHash += parseInt(P[i]) * Math.pow(10, m-1-i);
    tHash += parseInt(T[i]) * Math.pow(10, m-1-i);
  }

  for (let i=0; i<=n-m; i++) {
    if (tHash === pHash) {
      let j = 0;
      while(j < m && P[j] === T[i+j]) {
        j++;
      }
      if (j === m) {
        console.log('Matched at:', i);
      }
    }
    tHash = (tHash % Math.pow(10, m-1)) * 10 + parseInt(T[i + m]);
  }
}

let P = '123'; // 3
let T = '65432123'; // 8
const index = robinKarp(P, T);
console.log('Result:', index);