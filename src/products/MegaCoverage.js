const { Product } = require('./Product');

class MegaCoverage extends Product {
  constructor(sellIn, price) {
    super(`Mega Coverage`, sellIn, price);
  }

  updatePrice() {
    return this;
  }
}
exports.MegaCoverage = MegaCoverage;
