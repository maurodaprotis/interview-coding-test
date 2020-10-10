const { ProductFactory } = require('./products/ProductFactory');

class CarInsurance {
  constructor(products = []) {
    this.products = products.map(ProductFactory.getInstance);
  }

  updatePrice() {
    const updatedProducts = this.products.map(p => p.updatePrice());
    this.products = updatedProducts;

    return this.products;
  }
}

exports.CarInsurance = CarInsurance;
