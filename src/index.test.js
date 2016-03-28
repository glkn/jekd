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

describe('injecting values', function () {
    var container;
    before(function () {
        jekd.purge();
        container = jekd.create('container');
    });

    it('should return value from container', function(){
        container.value('test', 'passed');
        var result = container.get('test');
        expect(result).to.equal('passed');
    });

    it('should return last set value', function(){
        container.value('test', 'passed1');
        container.value('test', 'passed2');
        container.value('test', 'passed3');
        var result = container.get('test');
        expect(result).to.equal('passed3');
    });
});