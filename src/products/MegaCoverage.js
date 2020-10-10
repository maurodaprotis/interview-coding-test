const { Product } = require('./Product');

class MegaCoverage extends Product {
  static MAX_PRICE = 80;

  constructor(sellIn) {
    super(`Mega Coverage`, sellIn, MegaCoverage.MAX_PRICE);
  }

  set price(p) {
    this._price = MegaCoverage.MAX_PRICE;
  }

  get price() {
    return this._price;
  }

  updatePrice() {
    return this;
  }
}
exports.MegaCoverage = MegaCoverage;
