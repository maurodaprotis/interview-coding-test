class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  updatePrice() {
    this.sellIn = this.sellIn - 1;
    if (this.sellIn > 0) {
      this.price = Math.max(this.price - 1, 0);
    } else {
      this.price = Math.max(this.price - 2, 0);
    }

    return this;
  }
}

exports.Product = Product;
