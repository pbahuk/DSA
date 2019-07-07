let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved1");
  }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved");
  }, 1000);
});

let outerData;
var completePromise = Promise.all([promise1, promise2]);

completePromise
  .then(data => {
    console.log("Coming here");
    console.log(data);
  })
  .catch(err => console.error);
