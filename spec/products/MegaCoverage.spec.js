const { expect } = require('chai');
const { MegaCoverage } = require('../../src/products');

describe('Mega Coverage', () => {
  it('should always have price at eighty', () => {
    const product = new MegaCoverage(10, 100);

    expect(product.price).equal(80);
  });
  it('should not alter the price after update', () => {
    const product = new MegaCoverage(0, 80);

    product.updatePrice();

    expect(product.price).equal(80);
  });
  it('should not decrement sell in after update', () => {
    const product = new MegaCoverage(0, 80);

    product.updatePrice();

    expect(product.sellIn).equal(0);
  });
});
