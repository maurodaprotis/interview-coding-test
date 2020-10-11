import { SuperSale } from './SuperSale';

describe('Super Sale', () => {
  it('should decrease price by two on sale', () => {
    const product = new SuperSale(10, 20);

    product.updatePrice();

    expect(product.price).toEqual(18);
  });
  it('should decrease price by two after sale', () => {
    const product = new SuperSale(0, 20);

    product.updatePrice();

    expect(product.price).toEqual(16);
  });
  it('should decrease sell in by one after update', () => {
    const product = new SuperSale(0, 20);

    product.updatePrice();

    expect(product.sellIn).toEqual(-1);
  });
});
