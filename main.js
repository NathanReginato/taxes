module.exports = {
  calcTax: function (amount) {
    var taxAmount = 0;
    taxAmount = Math.round((amount  * 0.1)*100)/100;
    return taxAmount;
  }
}
