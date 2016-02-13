module.exports = {
  calcTax: function (amount) {
    var taxAmount = 0;
    if ( amount > 10 ) {
      taxAmount += 10 * 0.1;
      if ( amount > 20 ) {
        taxAmount += 10 * 0.07;
        taxAmount += (amount - 20) * 0.05;
        return taxAmount;
      }
      taxAmount += (amount - 10) * 0.07;
      return taxAmount;
    }
    taxAmount = amount * 0.1;
    return taxAmount;
  }
}
