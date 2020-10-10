const { Product } = require('./Product');

/*
 * Peak Coverage would increase the price until sellIns date approaches
 * and after that would decrease it's price
 */

class PeakCoverage extends Product {
  constructor(sellIn, price) {
    super(`Peak Coverage`, sellIn, price);
  }

  set price(p) {
    this._price =
      p > Product.MAX_PRICE
        ? Product.MAX_PRICE
        : Math.max(p, Product.MIN_PRICE);
  }

  get price() {
    return this._price;
  }

  updatePrice() {
    this._substractOneDay();
    this.price = this._isOnSale() ? this.price + 1 : this.price - 1;

    return this;
  }
}
exports.PeakCoverage = PeakCoverage;
