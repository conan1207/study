// async & await
// clear style of using promise! 절대적인 대체는 아님

// 1. async

/* function fetchUser() {
  return new Promise((resolve, reject) => {
    resolve("conan");
  });
}
*/

async function fetchUser() {
  // do network request in 10 secs...
  // asyn 를 붙이면 바로 promise로...
  return "conan";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await💫
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  // await은 async 안에서만 쓸 수 있음
  await delay(2000);
  return "🍎";
}

async function getKiwi() {
  await delay(1000);
  return "🥝";
}

/* function getKiwi() {
    return delay(1000)
    .then(() => '🥝');
} */

/* function pickFruits() {
  return getApple().then((apple) => {
    return getKiwi().then((kiwi) => `${apple} + ${kiwi}`);
  });
} */

async function pickFruits() {
  // 동기적으로 사용하듯이...
  const applePromise = getApple();
  const kiwiPromise = getKiwi(); //병렬적으로 사용 가능 그러나 이렇게 쓰지 않음 3번 참조
  const apple = await applePromise;
  const kiwi = await kiwiPromise;
  return `${apple} + ${kiwi}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getKiwi()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getKiwi()]);
}
pickOnlyOne().then(console.log);

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "conan" && password === "doil") ||
          (id === "sohee" && password === "kwon")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "conan") {
          resolve(alert(`hello! ${user} you have admin role...`));
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }

  async getUserWithRole(id, password) {
    const user1 = await this.loginUser(id, password);
    const role = await this.getRoles(user1);
    return role;
  }
}

const userStorage = new UserStorage();
const id = prompt("Enter your id");
const password = prompt("Enter your password");

userStorage
  .getUserWithRole(id, password) //
  .catch(console.log)
  .then(console.log);
