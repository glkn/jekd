var expect = require('chai').expect;
var jekd = require('./index');

describe('jekd', function(){
    it('should return container', function(){
        var container = jekd('app');
        expect(container.name).to.equal('app');
    });
});