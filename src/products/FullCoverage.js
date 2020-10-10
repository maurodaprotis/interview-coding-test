const { Product } = require('./Product');

class FullCoverage extends Product {
  constructor(sellIn, price) {
    super(`Full Coverage`, sellIn, price);
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
    this.price = this._isOnSale() ? this.price + 1 : this.price + 2;

    return this;
  }
}
exports.FullCoverage = FullCoverage;
