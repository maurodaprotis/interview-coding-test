const { expect } = require('chai');
const { LowCoverage } = require('../../src/products');

describe('Low Coverage', () => {
  it('should max price at fifty', () => {
    const product = new LowCoverage(10, 100);

    expect(product.price).equal(50);
  });
  it('should min price at zero', () => {
    const product = new LowCoverage(10, -100);

    expect(product.price).equal(0);
  });
  it('should decrease price by one on sale', () => {
    const product = new LowCoverage(10, 20);

    product.updatePrice();

    expect(product.price).equal(19);
  });
  it('should decrease price by two after sale', () => {
    const product = new LowCoverage(0, 20);

    product.updatePrice();

    expect(product.price).equal(18);
  });
  it('should decrease sell in by one after update', () => {
    const product = new LowCoverage(0, 20);

    product.updatePrice();

    expect(product.sellIn).equal(-1);
  });
});
