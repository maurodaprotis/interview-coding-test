const { expect } = require('chai');
const { SuperSale } = require('../../src/products');

describe('Super Sale', () => {
  it('should max price at fifty', () => {
    const product = new SuperSale(10, 100);

    expect(product.price).equal(50);
  });
  it('should min price at zero', () => {
    const product = new SuperSale(10, -100);

    expect(product.price).equal(0);
  });
  it('should decrease price by two on sale', () => {
    const product = new SuperSale(10, 20);

    product.updatePrice();

    expect(product.price).equal(18);
  });
  it('should decrease price by two after sale', () => {
    const product = new SuperSale(0, 20);

    product.updatePrice();

    expect(product.price).equal(16);
  });
  it('should decrease sell in by one after update', () => {
    const product = new SuperSale(0, 20);

    product.updatePrice();

    expect(product.sellIn).equal(-1);
  });
});
