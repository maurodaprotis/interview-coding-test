import { Product } from './Product';

describe('Product', () => {
  it('should max price at fifty', () => {
    const product = new Product('Product', 10, 100);

    expect(product.price).toEqual(50);
  });
  it('should min price at zero', () => {
    const product = new Product('Product', 10, -100);

    expect(product.price).toEqual(0);
  });
  it('should decrease price by one on sale', () => {
    const product = new Product('Product', 1, 20);

    product.updatePrice();

    expect(product.price).toEqual(19);
  });
  it('should decrease price by two after sale', () => {
    const product = new Product('Product', 0, 20);

    product.updatePrice();

    expect(product.price).toEqual(18);
  });
  it('should decrease sell in by one after update', () => {
    const product = new Product('Product', 0, 20);

    product.updatePrice();

    expect(product.sellIn).toEqual(-1);
  });
});
