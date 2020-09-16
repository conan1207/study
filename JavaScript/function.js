 /* Function
 - fundamental building block in the program
 - subprogram can be used multiple times
 - performs & taks or caculates a value */

 /* 1. Function declaration
   function name(param1, param2) { body... return; }
   one function === one thing
   naming: doSomthing, command, verb
   e. g. createCardAndPoint -> createdCard, createPoint
   function is object in JS */
   function log(message) { // TS에서는 파라미터나 리턴값에 타입을 정해줘야 함. ex) (message: string): number(return value)
       console.log(message);
   }
   log(`Hi sohee~?`);

 /* 2. Parameters
    premitive parameters: passed by value
    object parameters: passed by reference*/
    function changeName(obj) {
        obj.name = 'coder';
    }
    const sohee = { name: 'sohee' };
    changeName(sohee);
    console.log(sohee);

 /* 3. Default parameters (added in ES6)*/
 function yellNumber(comment = 'HIIII') {
     console.log(comment)
 }

 /* 4. Rest paeameters (added in ES6) */
 function printAll(...args) {
     for (let i =0; i < args.length; i++) {
        console.log(args);
     }
     // for (const arg of args) {
     //     console,log()
 }
 printAll('hi', 'everybody', 'comeon');

 // 5. local scope 밖에서는 안이 보이지 않고 안에서는 밖을 볼 수 있다.

 // 6. Return a value

 // 7. Early return, early exit
 // bad
 function upgradeUser(user) {
     if (user.point > 10) {
         // long upgrade logic...
     }
 }

 // good
 function upgradeUser2(user) {
     if (user.point <= 10) {
         return;
     }
     // long upgrade logic...
 }

 /* First-class function
    function are treated like any other variable
    can be assigned as a value to variable
    can be passed as an argument to other functions
    can be returned by another function */

 /* 1. function expression
    a function declaration can be called earlier than it is defiend (hoisted)
    a function expression is created when the execution reaches it*/
    const print = function () { // 익명함수 anoymous function
    console.log('print');
    };
    print();
    const printAgain = print;
    printAgain();
 
 // 2. Callback function using function expression
    function randomQuiz(answer, printYes, printNo) {
        if (answer === 'love you') {
            printYes();
        } else {
            printNo();
        }
    }

    const printYes = function () { // anoymous function
        console.log('yes!');
    };
    
    // named function
    // better debugging in debugger's stack traces
    // recusions
    const printNo = function print() { 
        console.log('no!');
    };

    randomQuiz('love me?', printYes, printNo);
    randomQuiz('love you', printYes, printNo);

    // Arrow function = always anoymous
    const add = (a, b) => a + b;
    const add2 = (a, b) => {
        // do something more
        return a + b;
    };

    // IIFE : Immediately Invoked Function Expression
    (function hello() {
        console.log('IIFE');
    })();