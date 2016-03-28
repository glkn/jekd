module.exports = function (name) {
    var values = {};
    setupName(this,name);
    this.value = setValue;
    this.get = getValue;

    function setValue(name, val) {
        values[name] = val;
    }

    function getValue(name) {
        return values[name];
    }
};

function setupName(obj, name) {
    Object.defineProperty(obj, 'name', {
        value: name,
        writeable: false
    });
}