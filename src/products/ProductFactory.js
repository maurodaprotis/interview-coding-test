const { FullCoverage } = require('./FullCoverage');
const { MegaCoverage } = require('./MegaCoverage');
const { SpecialFullCoverage } = require('./SpecialFullCoverage');
const { SuperSale } = require('./SuperSale');
const { PeakCoverage } = require('./PeakCoverage');
const { Product } = require('./Product');

class ProductFactory {
  static getInstance({ name, sellIn, price }) {
    switch (name) {
      case 'Mega Coverage':
        return new MegaCoverage(sellIn, price);
      case 'Full Coverage':
        return new FullCoverage(sellIn, price);
      case 'Special Full Coverage':
        return new SpecialFullCoverage(sellIn, price);
      case 'Super Sale':
        return new SuperSale(sellIn, price);
      case 'Peak Coverage':
        return new PeakCoverage(sellIn, price);
      default:
        return new Product(name, sellIn, price);
    }
  }
}
exports.ProductFactory = ProductFactory;
