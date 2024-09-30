import { Product } from "./Product";

export class Cart {
  private static _products: Product[] = [];
  private static _totalOrder: number = 0;
  private static _totalQuantity: number = 0;

  static calculateTotal() {
    this._totalOrder = 0;
    this._totalQuantity = 0;

    for (const product of this.products) {
      this._totalOrder += product.total;
      this._totalQuantity += product.quantity;
    }
  }

  static removeProduct(product: Product) {
    //retorno implícito em uma linha apenas
    this._products = this._products.filter((item) => {
      return item.id != product.id;
    });

    this.calculateTotal();

    // const produtosFiltrados: Product[] = [];

    // for (const item of this._products) {
    //   if (item.id == product.id) continue;
    //   produtosFiltrados.push(product);
    // }
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
    return this._totalOrder;
  }
}
