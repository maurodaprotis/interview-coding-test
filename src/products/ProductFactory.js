const { FullCoverage } = require('./FullCoverage');
const { MediumCoverage } = require('./MediumCoverage');
const { MegaCoverage } = require('./MegaCoverage');
const { LowCoverage } = require('./LowCoverage');
const { SpecialFullCoverage } = require('./SpecialFullCoverage');
const { SuperSale } = require('./SuperSale');

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
exports.ProductFactory = ProductFactory;
