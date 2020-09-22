// 함수 선언
function doSomething(add) {
  // 기능 수행
  console.log(add);
  const result = add(2, 3);
  console.log(result);
}

function add(a, b) {
  // 값을 반환
  const sum = a + b;
  return sum;
}

// 함수 호출
doSomething(add); // add() 를 넣지 마세요~ 함수가 수행된 다음에 전달됩니다,, 함수 이름만

const result = add(3, 5);
console.log(result);

const addFun = add;
console.log(addFun);
console.log(addFun(1, 2));
