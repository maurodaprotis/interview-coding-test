class Product {
  static MAX_PRICE = 50;

  static MIN_PRICE = 0;

  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  get price() {
    return this._price;
  }

  set price(p) {
    this._price =
      p < Product.MIN_PRICE
        ? Product.MIN_PRICE
        : Math.min(p, Product.MAX_PRICE);
  }

  _substractOneDay() {
    this.sellIn = this.sellIn - 1;
  }

  _isOnSale() {
    return this.sellIn > 0;
  }

  updatePrice() {
    this._substractOneDay();
    this.price = this._isOnSale() ? this.price - 1 : this.price - 2;

    return this;
  }
}

exports.Product = Product;
