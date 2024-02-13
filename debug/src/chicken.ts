export class Chicken {
  name: string;
  constructor(name:string) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} says cluck cluck cluck`);
  }
}   