function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a%b);
  }
}


function rotate(arr, d) {
  const shift = gcd(arr.length, d);
  console.log(shift);

  for (let i=0; i<arr.length; i++) {
    arr[i] = arr[i+d];
  }
}


let array = [1, 2, 3, 4, 5, 6, 7, 8];
const result = rotate(array, 2);
console.log(array);