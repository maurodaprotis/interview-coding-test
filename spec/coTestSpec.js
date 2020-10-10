const { expect } = require('chai');

const coTest = require('../src/coTest');

const { CarInsurance, Product } = coTest;

describe('Co Test', function() {
  describe('CarInsurance', () => {
    describe('when there is no products', () => {
      it('should return an empty array of products', () => {
        const carInsurance = new CarInsurance();

        const products = carInsurance.updatePrice();

        expect(products).to.have.lengthOf(0);
      });

      describe('when unsupported products', () => {
        it('should throw an error', () => {
          expect(
            () => new CarInsurance([new Product('Unknown Coverage', 10, 10)])
          ).to.throw('Product Unknown Coverage is not supported');
        });
      });
    });

    describe('Low Coverage', () => {
      it('should decrese price by one before sell date', () => {
        const carInsurance = new CarInsurance([
          new Product('Low Coverage', 5, 7),
        ]);

        const products = carInsurance.updatePrice();

        expect(products[0].sellIn).equal(4);
        expect(products[0].price).equal(6);
      });
      it('should decrease price by two after sell date', () => {
        const carInsurance = new CarInsurance([
          new Product('Low Coverage', 0, 4),
        ]);

        const products = carInsurance.updatePrice();

        expect(products[0].sellIn).equal(-1);
        expect(products[0].price).equal(2);
      });
      it('should not decrease price after zero', () => {
        const carInsurance = new CarInsurance([
          new Product('Low Coverage', 4, 0),
          new Product('Low Coverage', -3, 0),
        ]);

        const products = carInsurance.updatePrice();

        expect(products[0].sellIn).equal(3);
        expect(products[0].price).equal(0);
        expect(products[1].sellIn).equal(-4);
        expect(products[1].price).equal(0);
      });
    });
    describe('Medium Coverage', () => {
      it('should decrese price by one before sell date', () => {
        const carInsurance = new CarInsurance([
          new Product('Medium Coverage', 15, 20),
        ]);

        const products = carInsurance.updatePrice();

        expect(products[0].sellIn).equal(14);
        expect(products[0].price).equal(19);
      });
      it('should decrease price by two after sell date', () => {
        const carInsurance = new CarInsurance([
          new Product('Medium Coverage', -2, 4),
        ]);

        const products = carInsurance.updatePrice();

        expect(products[0].sellIn).equal(-3);
        expect(products[0].price).equal(2);
      });
      it('should not decrease price after zero', () => {
        const carInsurance = new CarInsurance([
          new Product('Medium Coverage', 4, 0),
          new Product('Medium Coverage', -3, 0),
        ]);

        const products = carInsurance.updatePrice();

        expect(products[0].sellIn).equal(3);
        expect(products[0].price).equal(0);
        expect(products[1].sellIn).equal(-4);
        expect(products[1].price).equal(0);
      });
    });
    describe('Mega Coverage', () => {
      it('should never alter price', () => {
        const carInsurance = new CarInsurance([
          new Product('Mega Coverage', 0, 80),
          new Product('Mega Coverage', -1, 80),
          new Product('Mega Coverage', 25, 80),
        ]);

        const products = carInsurance.updatePrice();

        expect(products[0].sellIn).equal(0);
        expect(products[0].price).equal(80);
        expect(products[1].sellIn).equal(-1);
        expect(products[1].price).equal(80);
        expect(products[2].sellIn).equal(25);
        expect(products[2].price).equal(80);
      });
    });
    describe('Full Coverage', () => {
      it('should increase price by one before sell date', () => {
        const carInsurance = new CarInsurance([
          new Product('Full Coverage', 15, 20),
        ]);

        const products = carInsurance.updatePrice();

        expect(products[0].sellIn).equal(14);
        expect(products[0].price).equal(21);
      });
      it('should increase price by two after sell date', () => {
        const carInsurance = new CarInsurance([
          new Product('Full Coverage', -2, 4),
        ]);

        const products = carInsurance.updatePrice();

        expect(products[0].sellIn).equal(-3);
        expect(products[0].price).equal(6);
      });
      it('should not increase price after fifty', () => {
        const carInsurance = new CarInsurance([
          new Product('Full Coverage', 4, 50),
          new Product('Full Coverage', -3, 49),
        ]);

        const products = carInsurance.updatePrice();

        expect(products[0].sellIn).equal(3);
        expect(products[0].price).equal(50);
        expect(products[1].sellIn).equal(-4);
        expect(products[1].price).equal(50);
      });
    });
    describe('Special Full Coverage', () => {
      it('should increase price by one before ten days to sell date', () => {
        const carInsurance = new CarInsurance([
          new Product('Special Full Coverage', 15, 20),
        ]);

        const products = carInsurance.updatePrice();

        expect(products[0].sellIn).equal(14);
        expect(products[0].price).equal(21);
      });
      it('should increase price by two between ten and five days to sell date', () => {
        const carInsurance = new CarInsurance([
          new Product('Special Full Coverage', 7, 20),
          new Product('Special Full Coverage', 7, 49),
        ]);

        const products = carInsurance.updatePrice();

        expect(products[0].sellIn).equal(6);
        expect(products[0].price).equal(22);
        expect(products[1].sellIn).equal(6);
        expect(products[1].price).equal(50);
      });
      it('should increase price by three between five and zero days to sell date', () => {
        const carInsurance = new CarInsurance([
          new Product('Special Full Coverage', 3, 20),
          new Product('Special Full Coverage', 2, 48),
        ]);

        const products = carInsurance.updatePrice();

        expect(products[0].sellIn).equal(2);
        expect(products[0].price).equal(23);
        expect(products[1].sellIn).equal(1);
        expect(products[1].price).equal(50);
      });
      it('should drop price to zero after sell date', () => {
        const carInsurance = new CarInsurance([
          new Product('Special Full Coverage', 0, 40),
        ]);

        const products = carInsurance.updatePrice();

        expect(products[0].sellIn).equal(-1);
        expect(products[0].price).equal(0);
      });
    });
    xdescribe('Super Sale', () => {
      it('should decrese price by two before sell date', () => {
        const carInsurance = new CarInsurance([
          new Product('Super Sale', 5, 7),
        ]);

        const products = carInsurance.updatePrice();

        expect(products[0].sellIn).equal(4);
        expect(products[0].price).equal(5);
      });
      it('should decrease price by four after sell date', () => {
        const carInsurance = new CarInsurance([
          new Product('Super Sale', 0, 4),
        ]);

        const products = carInsurance.updatePrice();

        expect(products[0].sellIn).equal(-1);
        expect(products[0].price).equal(0);
      });
      it('should not decrease price after 0', () => {
        const carInsurance = new CarInsurance([
          new Product('Super Sale', 4, 0),
          new Product('Super Sale', -3, 1),
        ]);

        const products = carInsurance.updatePrice();

        expect(products[0].sellIn).equal(3);
        expect(products[0].price).equal(0);
        expect(products[1].sellIn).equal(-4);
        expect(products[1].price).equal(0);
      });
    });
  });
});
