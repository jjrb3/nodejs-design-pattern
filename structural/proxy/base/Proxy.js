
class Proxy {

    constructor(subject) {
        this.subject = subject;
    }

    hello() {
        return `${ this.subject.hello() } world!`;
    }

    goodbye() {
        return this.subject.goodbye();
    }
}

module.exports = {
    Proxy
};