const { Product } = require('./Product');

class SuperSale extends Product {
  constructor(sellIn, price) {
    super(`Super Sale`, sellIn, price);
  }

  updatePrice() {
    this._substractOneDay();
    this.price = this._isOnSale() ? this.price - 2 : this.price - 4;

    return this;
  }
}
exports.SuperSale = SuperSale;
