const { Product } = require('./Product');

class SuperSale extends Product {
  constructor(sellIn, price) {
    super(`Super Sale`, sellIn, price);
  }

  updatePrice() {
    this.sellIn = this.sellIn - 1;
    if (this.sellIn > 0) {
      this.price = Math.max(this.price - 2, 0);
    } else {
      this.price = Math.max(this.price - 4, 0);
    }

    return this;
  }
}
exports.SuperSale = SuperSale;
