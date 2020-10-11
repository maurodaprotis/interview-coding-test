const { expect } = require('chai');
const {
  Product,
  MegaCoverage,
  FullCoverage,
  SpecialFullCoverage,
  SuperSale,
  PeakCoverage,
  ProductFactory,
} = require('../../src/products');

describe('ProductFactory', () => {
  it('should instantiate default product', () => {
    const instance = ProductFactory.getInstance(
      new Product('Medium Coverage', 10, 10)
    );

    expect(instance).to.be.an.instanceOf(Product);
  });
  it('should instantiate Mega Coverage product', () => {
    const instance = ProductFactory.getInstance(
      new Product('Mega Coverage', 10, 10)
    );

    expect(instance).to.be.an.instanceOf(MegaCoverage);
  });
  it('should instantiate Full Coverage product', () => {
    const instance = ProductFactory.getInstance(
      new Product('Full Coverage', 10, 10)
    );

    expect(instance).to.be.an.instanceOf(FullCoverage);
  });
  it('should instantiate Special Full Coverage product', () => {
    const instance = ProductFactory.getInstance(
      new Product('Special Full Coverage', 10, 10)
    );

    expect(instance).to.be.an.instanceOf(SpecialFullCoverage);
  });
  it('should instantiate Super Sale product', () => {
    const instance = ProductFactory.getInstance(
      new Product('Super Sale', 10, 10)
    );

    expect(instance).to.be.an.instanceOf(SuperSale);
  });
  it('should instantiate Peak Coverage product', () => {
    const instance = ProductFactory.getInstance(
      new Product('Peak Coverage', 10, 10)
    );

    expect(instance).to.be.an.instanceOf(PeakCoverage);
  });
});
