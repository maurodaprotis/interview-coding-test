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

class LowCoverage extends Product {
  constructor(sellIn, price) {
    super(`Low Coverage`, sellIn, price);
  }
}
class MediumCoverage extends Product {
  constructor(sellIn, price) {
    super(`Medium Coverage`, sellIn, price);
  }
}

class MegaCoverage extends Product {
  constructor(sellIn, price) {
    super(`Mega Coverage`, sellIn, price);
  }

  updatePrice() {
    return this;
  }
}

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

class ProductFactory {
  static getInstance({ name, sellIn, price }) {
    switch (name) {
      case 'Mega Coverage':
        return new MegaCoverage(sellIn, price);
      case 'Full Coverage':
        return new FullCoverage(sellIn, price);
      case 'Special Full Coverage':
        return new SpecialFullCoverage(sellIn, price);
      case 'Low Coverage':
        return new LowCoverage(sellIn, price);
      case 'Medium Coverage':
        return new MediumCoverage(sellIn, price);
      case 'Super Sale':
        return new SuperSale(sellIn, price);
      default:
        throw new Error(`Product ${name} is not supported`);
    }
  }
}

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

module.exports = {
  Product,
  CarInsurance,
};
