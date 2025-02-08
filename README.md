# TypeScript Type Error Not Caught in Addition

This code demonstrates a scenario where a TypeScript type error is not caught during compilation, leading to unexpected behavior at runtime. The `add` function is declared to accept two numbers and return their sum; however, the code calls `add` with a string and a number.  TypeScript's type checking does not catch this error, and the JavaScript runtime performs string concatenation instead of addition.

The solution demonstrates how to use type guards or conditional types to handle this situation and ensure type safety.