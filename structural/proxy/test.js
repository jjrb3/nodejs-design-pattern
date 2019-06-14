
const { Subject } = require('./base/Subject');
const { Proxy } = require('./base/Proxy');

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
}

module.exports = {
    ProxyTest
};