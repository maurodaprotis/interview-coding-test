const { expect } = require('chai');

const { CarInsurance } = require('../src/CarInsurance');
const { Product } = require('../src/products/Product');

describe('CarInsurance', () => {
  it('should return an empty array on update without products', () => {
    const carInsurance = new CarInsurance();

    const products = carInsurance.updatePrice();

    expect(products).to.have.lengthOf(0);
  });
  it('should update provided products', () => {
    const carInsurance = new CarInsurance([
      new Product('Low Coverage', 10, 10),
    ]);

    const products = carInsurance.updatePrice();

    expect(products).to.have.lengthOf(1);
    expect(products[0].price).equal(9);
    expect(products[0].sellIn).equal(9);
  });
});
