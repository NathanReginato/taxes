var code = require('../main');
var expect = require('chai').expect;

describe('Tax Calculator', function(){
  it('should return taxedAmount zero', function() {
    expect(code.calcTax(0)).to.equal(0);
  });
});
