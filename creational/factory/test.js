
const { PersonFactory } = require('./person-factory');

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
}

module.exports = {
    FactoryTest
};