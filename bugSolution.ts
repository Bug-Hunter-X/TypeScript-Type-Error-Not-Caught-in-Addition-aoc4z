function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number | string {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    return "Invalid input: Both values must be numbers";
  }
}

let result1 = addSafe(10, 20); // Correct addition
let result2 = addSafe("hello", 10); // Catches error
let result3 = addSafe(10, "world"); //Catches error
console.log(result1); //Output: 30
console.log(result2); //Output: Invalid input: Both values must be numbers
console.log(result3); //Output: Invalid input: Both values must be numbers