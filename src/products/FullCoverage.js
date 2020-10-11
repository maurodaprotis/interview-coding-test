const { Product } = require('./Product');

class FullCoverage extends Product {
  constructor(sellIn, price) {
    super(`Full Coverage`, sellIn, price);
  }

  updatePrice() {
    this._substractOneDay();
    this.price = this._isOnSale() ? this.price + 1 : this.price + 2;

    return this;
  }
}
exports.FullCoverage = FullCoverage;
