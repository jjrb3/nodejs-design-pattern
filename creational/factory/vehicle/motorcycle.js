
const { Vehicle } = require('./vehicle');

class Motorcycle extends Vehicle {

    constructor(props) {
        super(props);
    }

    getInfo() {
        return `Se creó una moto ${ this.getWheelsInfo() }`;
    }
}



module.exports = {
    Motorcycle
};