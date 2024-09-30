import { Product } from "./Produto";

export class Cart {
  private static _products: Product[] = [];
  private static _total: number = 0;

  static calculateTotal() {
    this._total = 0;

    for (const product of this.products) {
      this._total += product.total;
    }
  }

  static addToCart(product: Product) {
    const productInCart = this._products.includes(product);

    if (!productInCart) {
      this._products.push(product);
    }

    this.calculateTotal();
  }

  static get products() {
    return this._products;
  }

  static get total() {
    return this._total;
  }
}
