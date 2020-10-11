const { expect } = require('chai');
const { PeakCoverage } = require('../../src/products');

describe('Peak Coverage', () => {
  it('should increase price by one on sale', () => {
    const product = new PeakCoverage(10, 20);

    product.updatePrice();

    expect(product.price).equal(21);
  });
  it('should decrease price by one after sale', () => {
    const product = new PeakCoverage(0, 20);

    product.updatePrice();

    expect(product.price).equal(19);
  });
  it('should decrease sell in by one after update', () => {
    const product = new PeakCoverage(0, 20);

    product.updatePrice();

    expect(product.sellIn).equal(-1);
  });
});
