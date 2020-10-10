const { Product } = require('./Product');

class FullCoverage extends Product {
  constructor(sellIn, price) {
    super(`Full Coverage`, sellIn, price);
  }

  updatePrice() {
    this.sellIn = this.sellIn - 1;
    if (this.sellIn > 0) {
      this.price = Math.min(this.price + 1, 50);
    } else {
      this.price = Math.min(this.price + 2, 50);
    }

    return this;
  }
}
exports.FullCoverage = FullCoverage;
