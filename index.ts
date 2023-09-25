

import { Person } from './Person';
import { Student } from './Student';

const person1 = new Person('Ahmad', 21);
const person2 = new Person('Ruwaifa', 22);

const student1 = new Student('Moutsim', 15);

person1.sayHello();
person2.sayHello();
console.log(`Student name: ${student1.name}`);
