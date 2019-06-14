
const { PersonFactory }  = require('./person/person-factory');
const { VehicleFactory } = require('./vehicle/vehicle-factory');


class FactoryTest {

    constructor() {
        console.log('::::::::::::::::::::: Factory :::::::::::::::::::::')
    }


    firstTest() {

        let personFactory = new PersonFactory();

        personFactory.setName('Jeremy');
        personFactory.setSurname('Reyes');
        personFactory.setAge('29');
        personFactory.setSex('Male');

        let jeremy = personFactory.build();

        console.log(jeremy);
    }

    secondTest() {

        let motorcycle = VehicleFactory.generateByWheels(2);

        console.log(motorcycle.getInfo());
    }
}

module.exports = {
    FactoryTest
};