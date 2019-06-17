
const { FactoryTest }   = require('./creational/factory/test');
const { ProxyTest }     = require('./structural/proxy/test');

// Factory Pattern
let factory = new FactoryTest();

factory.firstTest();
factory.secondTest();

// Proxy
let proxy = new ProxyTest();

proxy.firstTest();
proxy.secondTest();
