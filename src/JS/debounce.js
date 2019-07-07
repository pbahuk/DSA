function debounce(fn, wait, immediate) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) {
        fn.apply(context, args);
      }
    };

    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      fn.apply(context, args);
    }
  };
}

var myEfficientFn = debounce(function() {
  // All the taxing stuff you do
  console.log("Function call");
}, 100);

window.addEventListener("resize", myEfficientFn);
