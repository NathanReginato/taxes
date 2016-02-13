var code = require('../main');
var expect = require('chai').expect;

describe('Tax Calculator', function(){
    it('should return taxedAmount zero', function() {
      expect(code.calcTax(0)).to.equal(0);
    });

  it('should tax 3% on total amount', function() {
    expect(code.calcTax(10)).to.equal(0.3);
    expect(code.calcTax(30)).to.equal(0.9);
  });
  //
  // it('should tax 7% on the second $10', function(){
  //   expect(code.calcTax(15)).to.equal(1.35);
  // });

});

describe('Tax Calculator Error', function(){
  it('should return a large decimal number', function() {
    expect(code.calcTaxError(30)).to.equal(0.8999999999999999);
  });
});
