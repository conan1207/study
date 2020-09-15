"use strict";

/* Objects
   one of the JavaScript's data types.
   a collection of related data and/or dunctionlity.
   Nearly all objects in JavaScript are instance of Object 
   object = { key : value };
*/

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const sohee = { name: "sohee", age: 28 };
print(sohee);

// With JavaScript magic (dynamically typed language)
// can add properties later
sohee.hasJob = true;
console.log(sohee.hasJob);

// can delete properties later
delete sohee.hasJob;
console.log(sohee.hasJob);

// 2. Computed properties
// key should be always string
console.log(sohee["name"]);
sohee["hasJob"] = true;
console.log(sohee.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(sohee, "name");
printValue(sohee, "age");

// 3. Property value shorhand
const person1 = { name: "bob", age: 32 };
const person2 = { name: "steve", age: 21 };
const person3 = { name: "dave", age: 16 };
const person4 = new Person("conan", 9);
console.log(person4);

// 4. constructor function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log("name" in sohee);
console.log("something" in sohee);

// 6. for ..in vs for ..of
// for (key in obj)

for (let key in sohee) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])

const user = { name: "sohee", age: 28 };
const user2 = user;
user2.name = "coder";
console.log(user);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
