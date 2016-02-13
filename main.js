module.exports = {
  calcTax: function (amount) {
    var taxAmount = 0;
    taxAmount = +(amount * 0.03).toFixed(1);
    return taxAmount;
  },
  calcTaxError: function (amount) {
    var taxAmountError = 0;
    taxAmountError = amount * 0.03;
    return taxAmountError;
  }
}
