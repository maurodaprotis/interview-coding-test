import { Product, ProductFactory } from './products';

export class CarInsurance {
  products: Product[];

  constructor(products: Product[] = []) {
    this.products = products.map(ProductFactory.getInstance);
  }

  updatePrice(): Product[] {
    const updatedProducts = this.products.map((p) => p.updatePrice());
    this.products = updatedProducts;

    return this.products;
  }
}
