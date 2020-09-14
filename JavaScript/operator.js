// 1. String concatention
console.log('1' + 2);

// 2. Number operators
// + add, - substract, / divide, * multiply, % remainder, ** exponentiation

// 3. Increment and decrement operator
// ++a, a++

// 4. Assigment operators
let x = 1;
let y = 2;
x += y; //x = x + y

// 5. Comparison operator
// < <==

// 6. Logical operator : || (or), && (and), ! (not) 가볍거나 빠져나오는 걸 제일 먼저
// || (or), finds the first truthy value - true를 반환
// && (and), finds the first falsy value
// often used to compress long if-statement
// nullableObject && nullableObject.somthing - null check
// ! (not)

// 7. Equality
// == loose equality, with type conversion
// === strict equality, no type conversion
// object equality by reference
const sohee1 = { name: 'sohee' };
const sohee2 = { name: 'sohee' };
const sohee3 = sohee1;
console.log(sohee1 == sohee2); // f 레퍼런스가 달라...
console.log(sohee1 === sohee2); // f
console.log(sohee1 === sohee3); // t

// 8. Conditional operator: if, if else, else

// 9. Ternary operator: ?
// condition ? value1(t) : value2(f); - simple

// 10. Switch statment
// use for mutiple if checks
// use for enum-like value check
// use for multiple type checks in Js

// 11. Loops
// while loop, while the condition is truthy, body code is executed.

// do while loop, body is executed first, then check the condition.

// for loop, for(begin; condition; step) - for문 안에 for문 가능 nested loops