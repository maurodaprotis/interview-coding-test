import { MegaCoverage } from './MegaCoverage';

describe('Mega Coverage', () => {
  it('should always have price at eighty', () => {
    const product = new MegaCoverage(10);

    expect(product.price).toEqual(80);
  });
  it('should not alter the price after update', () => {
    const product = new MegaCoverage(0);

    product.updatePrice();

    expect(product.price).toEqual(80);
  });
  it('should not decrement sell in after update', () => {
    const product = new MegaCoverage(0);

    product.updatePrice();

    expect(product.sellIn).toEqual(0);
  });
});
