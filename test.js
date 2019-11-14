
// es5 Function Constrctor
function Person1 (name) {
  this.name = name + ' 1';
}

// es5 继承
function Student (name, studentId) {
  Person1.call(this, name);
  this.studentId = studentId;
}
let stu = new Student('yyh', 12)
console.log(stu instanceof Person1) // false

Student.prototype = Object.create(Person1.prototype)
Student.prototype.constructor = Student

stu = new Student('yyh', 3);

console.log(stu instanceof Person1) // true


// es6 Class
class Person2 {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
}

class Mate extends Person2 {
  constructor(name, studentId) {
    super(name);
    this.studentId = studentId;
  }
  
}

let mate = new Mate('yyh', 12);

console.log(mate instanceof Person2) // true