const { expect } = require('chai');
const { Product } = require('../../src/products');

describe('Product', () => {
  it('should max price at fifty', () => {
    const product = new Product('Product', 10, 100);

    expect(product.price).equal(50);
  });
  it('should min price at zero', () => {
    const product = new Product('Product', 10, -100);

    expect(product.price).equal(0);
  });
  it('should decrease price by one on sale', () => {
    const product = new Product('Product', 10, 20);

    product.updatePrice();

    expect(product.price).equal(19);
  });
  it('should decrease price by two after sale', () => {
    const product = new Product('Product', 0, 20);

    product.updatePrice();

    expect(product.price).equal(18);
  });
  it('should decrease sell in by one after update', () => {
    const product = new Product('Product', 0, 20);

    product.updatePrice();

    expect(product.sellIn).equal(-1);
  });
});
