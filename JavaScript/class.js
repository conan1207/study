'use strict'; // mordern
/* Object-oriented programming
   class: template
   object: instance of a class
   JavaScript classes
   - introduced in ES6
   - syntactical sugar over prototype-based inheritance*/

// 1. Class declarations
class Person {
    // constuctor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: Hello, evryone!`);
    }
}

const sohee = new Person('sohee', 28)
console.log(sohee.name);
console.log(sohee.age);
sohee.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age
    }

    set age(value) { //무한 루프 막으려고 변수 값을 변경
        this._age = value < 0 ? '오류' : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!

class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // # class 내부에서만 값 접근, 변경 가능

// 4. Static properties and methods
// Too soon!

class Article {
    static publisher = 'conan1207'; // 데이터 상관 없이 클래스 자체에 연결 공통적으로 사용
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); //undefined class자체에...있기에
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width*this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    //overriding
    draw() {
        super.draw(); // 부모 메소드 상속
        console.log('삼각형!!!');
    }

    getArea() {
        return (this.width * this.height) / 2;
    }

    toString() {
        super.toString();
        return `${this.width}px!!!`
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // t
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape); // t Shape를 상속함
console.log(triangle instanceof Object); // t 모든 class는 오브젝트를 상속함
console.log(triangle.toString());