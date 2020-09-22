"use strict";

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    // 서버 통신 하는 것처럼..
    resolve("conan"); // 성공!
    //reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, catch, finally 를 이용해 값을 받아 올 수 있음.
promise
  .then((value) => {
    // value is conan. then : when promise is success 값을 전달해도 되고 또 다른 비동기인 promise 전달 가능
    console.log(value);
  })
  .catch((error) => {
    // catch: when promise is fail
    console.log(error);
  })
  .finally(() => {
    // finally: whenever
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg) //(hen) => getEgg(hen)
  .catch((error) => {
    // 전체 promise에 오류가 생기지 않게 에러 핸들링 바로 바로 catch를 뒤에 붙여서
    return "🥓";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
