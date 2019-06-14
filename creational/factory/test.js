
const { PersonFactory } = require('./person-factory');


let factoryTest = () => {

    let personFactory = new PersonFactory();

    personFactory.setName('Jeremy');
    personFactory.setSurname('Reyes');
    personFactory.setAge('29');
    personFactory.setSex('Male');

    let jeremy = personFactory.build();

    console.log(jeremy);
};

module.exports = {
    factoryTest
};