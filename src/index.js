var Container = require('./container');

var containers = {};

module.exports = function(name) {
    if ( !containers[name] ) {
        containers[name] = new Container(name);
    }
    return containers[name];
};