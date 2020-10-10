const { expect } = require('chai');
const { FullCoverage } = require('../../src/products');

describe('Full Coverage', () => {
  it('should max price at fifty', () => {
    const product = new FullCoverage(10, 100);

    expect(product.price).equal(50);
  });
  it('should min price at zero', () => {
    const product = new FullCoverage(10, -100);

    expect(product.price).equal(0);
  });
  it('should increase price by one on sale', () => {
    const product = new FullCoverage(10, 20);

    product.updatePrice();

    expect(product.price).equal(21);
  });
  it('should increase price by two after sale', () => {
    const product = new FullCoverage(0, 20);

    product.updatePrice();

    expect(product.price).equal(22);
  });
  it('should decrease sell in by one after update', () => {
    const product = new FullCoverage(0, 20);

    product.updatePrice();

    expect(product.sellIn).equal(-1);
  });
});
