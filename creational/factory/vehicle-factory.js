
const { Car } = require('./car');
const { Motorcycle } = require('./motorcycle');


class VehicleFactory {

    static generateByWheels(wheels) {

        switch (wheels) {
            case 4:
                return new Car({ wheels });
                break;

            case 2:
                return new Motorcycle({ wheels });
                break;

            default:
                return new Error('No vehicle found');
        }
    }
}

module.exports = {
    VehicleFactory
};