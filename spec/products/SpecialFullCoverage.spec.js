const { expect } = require('chai');
const { SpecialFullCoverage } = require('../../src/products');

describe('Special Full Coverage', () => {
  it('should max price at fifty', () => {
    const product = new SpecialFullCoverage(10, 100);

    expect(product.price).equal(50);
  });
  it('should min price at zero', () => {
    const product = new SpecialFullCoverage(10, -100);

    expect(product.price).equal(0);
  });
  it('should increase price by one when more than ten of sale left', () => {
    const product = new SpecialFullCoverage(12, 20);

    product.updatePrice();

    expect(product.price).equal(21);
  });
  it('should increase price by two when between ten and five days of sale left', () => {
    const product = new SpecialFullCoverage(9, 20);

    product.updatePrice();

    expect(product.price).equal(22);
  });
  it('should increase price by one when less than 5 of sale left', () => {
    const product = new SpecialFullCoverage(3, 20);

    product.updatePrice();

    expect(product.price).equal(23);
  });
  it('should drop price after sale', () => {
    const product = new SpecialFullCoverage(0, 20);

    product.updatePrice();

    expect(product.price).equal(0);
  });
  it('should decrease sell in by one after update', () => {
    const product = new SpecialFullCoverage(0, 20);

    product.updatePrice();

    expect(product.sellIn).equal(-1);
  });
});
