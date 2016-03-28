var expect = require('chai').expect;
var jekd = require('./index');

describe('jekd', function () {
    before(function () {
        jekd.purge();
    });

    it('should return container', function () {
        var container = jekd.create('app');
        expect(container).to.be.an('object');
    });
});

describe('container', function () {
    before(function () {
        jekd.purge();
    });

    it('should not allow to change its name', function(){
        var container = jekd.create('app');
        container.name = 'something';
        expect(container.name).to.not.equal('something');
    });
});