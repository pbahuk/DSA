function numStringConvertor(obj) {
  if (Object.entries(obj).length === 0 && obj.constructor === Object) {
    return;
  }
  const keys = Object.keys(obj);
  keys.forEach(key => {
    if (typeof obj[key] === "object") {
      numStringConvertor(obj[key]);
    } else if (typeof obj[key] === "number") {
      obj[key] = obj[key] + "";
    }
  });
}

var obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};

console.log(obj);
numStringConvertor(obj);
console.log(obj);
