import { Product } from './Product';

/*
 * Peak Coverage would increase the price until sellIns date approaches
 * and after that would decrease it's price
 */

export class PeakCoverage extends Product {
  constructor(sellIn: number, price: number) {
    super(`Peak Coverage`, sellIn, price);
  }

  updatePrice(): PeakCoverage {
    this.substractOneDay();
    this.price = this.isOnSale() ? this.price + 1 : this.price - 1;

    return this;
  }
}
