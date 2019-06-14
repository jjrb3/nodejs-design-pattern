
const { Vehicle } = require('./vehicle');

class Car extends Vehicle {

    constructor(props) {
        super(props);
    }

    getInfo() {
        return `El carro ${ this.getWheelsInfo() }`;
    }
}



module.exports = {
    Car
};