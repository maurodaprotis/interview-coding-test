const { expect } = require('chai');
const {
  Product,
  LowCoverage,
  MediumCoverage,
  MegaCoverage,
  FullCoverage,
  SpecialFullCoverage,
  SuperSale,
  ProductFactory,
} = require('../../src/products');

describe('ProductFactory', () => {
  it('should throw error on unknown product', () => {
    expect(() =>
      ProductFactory.getInstance(new Product('Unknown Coverage', 10, 10))
    ).to.throw('Product Unknown Coverage is not supported');
  });
  it('should instantiate Low Coverage product', () => {
    const instance = ProductFactory.getInstance(
      new Product('Low Coverage', 10, 10)
    );

    expect(instance).to.be.an.instanceOf(LowCoverage);
  });
  it('should instantiate Medium Coverage product', () => {
    const instance = ProductFactory.getInstance(
      new Product('Medium Coverage', 10, 10)
    );

    expect(instance).to.be.an.instanceOf(MediumCoverage);
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
});
