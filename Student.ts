import { Person } from './Person';

export class Student extends Person {
  private _studentName: string; // Rename the private field

  constructor(name: string, age: number) {
    super(name, age);
    this._studentName = "Agha Moutsim";
  }

  public get studentName(): string { // Rename the getter property
    return this._studentName;
  }

  public set studentName(value: string) { // Rename the setter property
    this._studentName = value;
  }
}
