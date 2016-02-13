var code = require('../main');
var expect = require('chai').expect;

describe('Tax Calculator', function(){
  it('should return taxedAmount zero', function() {
    expect(code.calcTax(0)).to.equal(0);
  });
  
  it('should tax 10% on the first $10', function() {
    expect(code.calcTax(1)).to.equal(0.1);
    expect(code.calcTax(10)).to.equal(1);
  });
});
