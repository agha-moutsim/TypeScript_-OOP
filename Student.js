"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Person_1 = require("./Person");
class Student extends Person_1.Person {
    constructor(name, age) {
        super(name, age);
        this._studentName = "Agha Moutsim";
    }
    get studentName() {
        return this._studentName;
    }
    set studentName(value) {
        this._studentName = value;
    }
}
exports.Student = Student;
