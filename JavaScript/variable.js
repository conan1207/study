// 1. Use strict
// add in ES5
// use this for Valina JavaScript.
// mordern

'use strict'; 

// 2. Variable, read and write
// let (added in ES6)
// let like a pointer
// mutable data type

let globalName = 'global name';

{ //blockscope
let name = 'sohee';
console.log(name);
name = 'conan';
console.log(name);
var age = '28'; // has no block scope
}

console.log(name);
console.log(age);

// var (don't ever use this! 선언하지 않아도 사용 가능)
// var hoisting (move declaration from bottom to top)
// has no block scope

// 3. Constant (read only)
// use const whenever possible.
// only use let if variable needs to change.

// Immutable data types: primitive types, frozen objects (i. e. object.freeze())
// Mutable data type: all objects by default are mutable in JS 오브젝트 포인터만 묶고 안에 것들은 수정 가능

// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistake

const dayInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primative, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function (일급함수 함수가 값이 될 수 있음)

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn); // 연산 전에 연산할 수 있는 variable한 것인지 확인

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2**53
// 끝에 n을 붙이면 bigInt로 인식
console.log(`value: ${bigInt} type: ${typeof bigInt}`)
Number.MAX_SAFE_INTEGER;

// string
const hello = 'hello!'
const doil = `${hello} doil!!!`
console.log(doil);

// boolean
// false: 0, null, undefined, Nan, ''
// true: any other value

// null
let nothing = null; // 내가 빈 값이라고 지정함
console.log(typeof nothing);

// undefined
let x;
console.log(typeof(x));

// symbol, create unique identifiers for object
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // 유일한 식별자로 만들 때
console.log(symbol1.description); // description 으로 string 변환 후 출력

// 5. Dynamic typing: dynamically typed language
// 다수의 개발자가 참여하면 힘들어짐...