
class Vehicle {

    constructor(data) {
        this.wheels = data.wheels;
    }

    getWheelsInfo() {
        return `con ${this.wheels} ruedas`;
    }
}

module.exports = {
    Vehicle
};