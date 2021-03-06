const { Product } = require('./Product');

/*
 * Peak Coverage would increase the price until sellIns date approaches
 * and after that would decrease it's price
 */

class PeakCoverage extends Product {
  constructor(sellIn, price) {
    super(`Peak Coverage`, sellIn, price);
  }

  updatePrice() {
    this._substractOneDay();
    this.price = this._isOnSale() ? this.price + 1 : this.price - 1;

    return this;
  }
}
exports.PeakCoverage = PeakCoverage;
