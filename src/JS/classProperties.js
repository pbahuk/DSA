(function() {
  class A {
    b = "hi";
    #c = "private";
    static d = "class";
    constructor() {
      this.a = "hello";
    }

    fn = () => {
      console.log("I am fn");
    };

    fn2() {
      console.log("I am fn2", this.#c);
    }
  }

  const a = new A();
  console.log(a.b); // hi, it actually attached value to this.b
  //     console.log(a.#c); // Error, Private Variable
  console.log(a.a); // 'hello'
  a.fn2(); // I am fn2 private
  console.log(A.prototype); // Doesn't have rge fn in the prototype object
  console.log(A.d);
})();
