class Student implements Person {
  name: string;
  age: number;
  address?: string;
  
  constructor(name: string, age: number, address?: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  
  speak() {
    return `Hello, my name is ${this.name}`;
  }
  
  walk() {
    console.log("Walking...");
  }
}

let student = new Student("John", 25);
console.log(student.speak()); // "Hello, my name is John"
student.walk(); // "Walking..."
