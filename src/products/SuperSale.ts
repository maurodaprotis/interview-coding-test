import { Product } from './Product';

export class SuperSale extends Product {
  constructor(sellIn: number, price: number) {
    super(`Super Sale`, sellIn, price);
  }

  updatePrice(): SuperSale {
    this.substractOneDay();
    this.price = this.isOnSale() ? this.price - 2 : this.price - 4;

    return this;
  }
}
