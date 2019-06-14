
const { FactoryTest } = require('./creational/factory/test');


// Factory Pattern
let factory = new FactoryTest();

factory.firstTest();

let car = factory.secondTest(5);
console.log(car.getInfo());