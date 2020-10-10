const { Product } = require('./Product');

class SpecialFullCoverage extends Product {
  constructor(sellIn, price) {
    super(`Special Full Coverage`, sellIn, price);
  }

  _getPriceIncrement() {
    if (this.sellIn > 10) {
      return 1;
    }
    if (this.sellIn < 10 && this.sellIn > 5) {
      return 2;
    }
    return 3;
  }

  updatePrice() {
    this._substractOneDay();
    this.price = this._isOnSale()
      ? this.price + this._getPriceIncrement()
      : Product.MIN_PRICE;

    return this;
  }
}
exports.SpecialFullCoverage = SpecialFullCoverage;
