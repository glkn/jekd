module.exports = function (name) {
    Object.defineProperty(this, 'name', {
        value: name,
        writeable: false
    });
};