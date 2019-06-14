
const { Person } = require('./person');

class PersonFactory {

    constructor(name, surname, age, sex) {

        this.name    = null;
        this.surname = null;
        this.age     = null;
        this.sex     = null;
    }

    setName(name) {
        this.name = name;
    }

    setSurname(surname) {
        this.surname = surname;
    }

    setAge(age) {
        this.age = age;
    }

    setSex(sex) {
        this.sex = sex;
    }

    build() {
        return new Person(this.name, this.surname, this.age, this.sex);
    }
}

module.exports = {
    PersonFactory
};