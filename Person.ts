export class Person {
    public name: string; // Change from private to protected
    private age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    sayHello(): void {
      console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
    }
  }
  