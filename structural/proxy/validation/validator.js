
class Validator {

    constructor(subject) {
        this.subject = subject;
    }

    add(numberOne, numberTwo) {
        if (typeof numberOne === 'number' && typeof numberTwo === 'number') {
            return this.subject.add(numberOne, numberTwo);
        }
    }

    substract(numberOne, numberTwo) {
        if (typeof numberOne === 'number' && typeof numberTwo === 'number') {
            return this.subject.substract(numberOne, numberTwo);
        }
    }
}

module.exports = {
    Validator
};