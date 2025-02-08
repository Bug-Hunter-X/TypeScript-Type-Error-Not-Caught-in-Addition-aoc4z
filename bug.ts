function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", 10); // Type error is not caught here
console.log(result);