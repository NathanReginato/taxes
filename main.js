module.exports = {
  calcTax: function (amount) {
    var taxAmount = 0;
    if ( amount > 10 ) {
      taxAmount = 10 * 0.1;
      taxAmount += (amount - 10) * 0.07;
      return taxAmount;
    }
    taxAmount = amount * 0.1;
    return taxAmount;
  }
}
