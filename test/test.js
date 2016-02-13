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

  it('should tax 7% on the second $10', function(){
    expect(code.calcTax(15)).to.equal(1.35);
    expect(code.calcTax(18)).to.equal(1.56);
  });

  it('should tax 5% on the third $10', function(){
    expect(code.calcTax(26)).to.equal(2.0);
    expect(code.calcTax(28)).to.equal(2.1);
  });

  it('should tax 3% on all the rest', function(){
    expect(code.calcTax(64)).to.equal(3.22);
    expect(code.calcTax(96)).to.equal(4.18);
  });

});
