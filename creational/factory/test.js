
const { PersonFactory } = require('./person-factory');
const { Car } = require('./car');
const { Motorcycle } = require('./motorcycle');

class FactoryTest {

    firstTest() {

        let personFactory = new PersonFactory();

        personFactory.setName('Jeremy');
        personFactory.setSurname('Reyes');
        personFactory.setAge('29');
        personFactory.setSex('Male');

        let jeremy = personFactory.build();

        console.log(jeremy);
    }

    secondTest(wheels) {

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
    FactoryTest
};