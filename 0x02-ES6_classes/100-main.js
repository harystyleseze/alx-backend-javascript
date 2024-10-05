import EVCar from './100-evcar.js';

const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
console.log(ec1); // This will print the EVCar instance

const ec2 = ec1.cloneCar(); // Clone the EVCar instance
console.log(ec2); // This should print the Car instance with the brand, motor, and color

