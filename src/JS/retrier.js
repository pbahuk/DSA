var count = 0;
function task() {
  if (count < 4) {
    count++;
    return 0;
  }

  count = 0;
  console.log("Task performed");
  return 1;
}

function retrier(targetFn, wait, limit) {
  let count = 0;

  return function() {
    console.log("getting called");
    let context = this;
    let args = [...arguments];
    (function later() {
      count++;
      const result = targetFn.apply(context, args);
      console.log("result", result);
      if (result) {
        console.log("Completed");
      } else {
        if (count <= limit) {
          setTimeout(later, wait);
        } else {
          console.log("Errored out");
        }
      }
    })();
  };
}

var retriedFn = retrier(task, 1000, 4);
retriedFn();
