import Car from "./10-car.js";

class TestCar extends Car {}

const tc1 = new TestCar("Nissan", "Turbo", "Pink");
const tc2 = tc1.cloneCar();

console.log(tc1); // Output the original object
console.log(tc1 instanceof TestCar); // Check if tc1 is an instance of TestCar

console.log(tc2); // Output the cloned object
console.log(tc2 instanceof TestCar); // Check if tc2 is an instance of TestCar

console.log(tc1 == tc2); // Check if tc1 and tc2 are the same object

