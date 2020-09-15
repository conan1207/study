/* JSON 
   simplest data interchange format
   lightweight text-based  structure
   easy to read
   key-value pairs
   used for serialization(직렬화) and tranisson of data between the network the network connection
   independent programing lanauge abd platform  */

// 1. Object to JSON
// stringfy(obj)

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]); // " " - json 규격사항
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    // 함수는 오브젝트의 데이터가 아니기 때문에 제외, symbol도!
    console.log(`${this.name} can jump ☺`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "size", "color"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  return key === "name" ? "conan" : value;
});
console.log(json);

// 2. JSON to object
// parse(json)

json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); 이미 문자열로 변했기 때문에

const obj2 = JSON.parse(json, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});

console.log(obj2.birthDate.getDate());
