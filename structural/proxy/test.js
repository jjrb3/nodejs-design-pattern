
const { Subject } = require('./base/Subject');
const { Proxy } = require('./base/Proxy');
const { Calculator } = require('./validation/calculator');
const { Validator } = require('./validation/validator');

class ProxyTest {

    constructor() {
        console.log('::::::::::::::::::::: Proxy :::::::::::::::::::::')
    }

    firstTest() {

        let tmpSubj = new Subject();
        let proxy   = new Proxy(tmpSubj);

        console.log(proxy.hello());
        console.log(proxy.goodbye());
    }

    secondTest() {

        let calculator = new Calculator();
        let validator  = new Validator(calculator);

        console.log(validator.add(2,1));
        console.log(validator.substract(40,7));
    }
}

module.exports = {
    ProxyTest
};