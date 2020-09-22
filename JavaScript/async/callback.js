"use strict";

/*
함수 선언문은 호이스팅 되면서 최상단으로 끌어 올려짐
function printImmdiately(print) {
    print();
  }

  function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
*/

// JavaScript is synchronous.
// Execute the code block in order after hoisting. 선언되는 순으로 하나씩
// hoisting: var, function declaration

console.log("1"); // sync
setTimeout(() => console.log("2"), 1000); // asynchronous
console.log("3"); // sync

// Synchronous callback
function printImmdiately(print) {
  print();
}

printImmdiately(() => console.log("print now!")); // sync

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log("async callback"), 2000); // async

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "conan" && password === "doil") ||
        (id === "sohee" && password === "kwon")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "conan") {
        onSuccess({ name: "conan", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("Enter your id");
const password = prompt("Enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello! ${userWithRole.name}, you have a ${userWithRole.role} role😎`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
