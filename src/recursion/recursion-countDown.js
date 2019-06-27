function countDown(num) {
  if (num < 0) {
      return;
  }

  console.log(num);
  num--;
  countDown(num);
}

var num2 = 5;
countDown(num2);
console.log(num2);

// Passed by value.

function sayHello(obj) {
  obj = {}
  console.log(obj);
}


let newObj = { hi: 'hello' };
console.log(newObj);
sayHello(newObj);
console.log(newObj);