import { CarInsurance } from './CarInsurance';
import { Product } from './products';

describe('CarInsurance', () => {
  it('should return an empty array on update without products', () => {
    const carInsurance = new CarInsurance();

    const products = carInsurance.updatePrice();

    expect(products.length).toEqual(0);
  });
  it('should update provided products', () => {
    const carInsurance = new CarInsurance([
      new Product('Low Coverage', 10, 10),
    ]);

    const products = carInsurance.updatePrice();

    expect(products.length).toEqual(1);
    expect(products[0].price).toEqual(9);
    expect(products[0].sellIn).toEqual(9);
  });
});
