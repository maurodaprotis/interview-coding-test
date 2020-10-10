const { Product } = require('./Product');

class SpecialFullCoverage extends Product {
  constructor(sellIn, price) {
    super(`Special Full Coverage`, sellIn, price);
  }

  updatePrice() {
    this.sellIn = this.sellIn - 1;
    if (this.sellIn > 10) {
      this.price = Math.min(this.price + 1, 50);
    } else if (this.sellIn < 10 && this.sellIn > 5) {
      this.price = Math.min(this.price + 2, 50);
    } else if (this.sellIn < 5 && this.sellIn > 0) {
      this.price = Math.min(this.price + 3, 50);
    } else {
      this.price = 0;
    }

    return this;
  }
}
exports.SpecialFullCoverage = SpecialFullCoverage;
