import { Product } from './Product';

export class FullCoverage extends Product {
  constructor(sellIn: number, price: number) {
    super(`Full Coverage`, sellIn, price);
  }

  updatePrice(): FullCoverage {
    this.substractOneDay();
    this.price = this.isOnSale() ? this.price + 1 : this.price + 2;

    return this;
  }
}
exports.FullCoverage = FullCoverage;
