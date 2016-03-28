var Container = require('./container');

var containers = {};

module.exports = new Jekd();

function Jekd() {
    var containers = {};

    this.create = create;
    this.purge = purge;

    function create(name) {
        if (!containers[name]) {
            containers[name] = new Container(name);
        }
        return containers[name];
    }

    function purge() {
        containers = {};
    }
}
