import { Product } from "./Product";

export class Cart {
  private static _products: Product[] = [];
  private static _orderTotal: number = 0;
  private static _totalQuantity: number = 0;

  static calculateTotal() {
    this._orderTotal = 0;
    this._totalQuantity = 0;

    for (const product of this.products) {
      this._orderTotal += product.total;
      this._totalQuantity += product.quantity;
    }
  }

  static removeProduct(product: Product) {
    // Remove um produto do carrinho, filtrando pelo produto em questão
    this._products = this._products.filter((item) => item.id !== product.id);
    this.calculateTotal();
  }

  static addToCart(product: Product) {
    const productInCart = this._products.includes(product);

    if (!productInCart) {
      this._products.push(product);
    }

    this.calculateTotal();
    console.log(Cart._products);
  }

  static get products() {
    return this._products;
  }

  static get total() {
    return this._orderTotal;
  }
}
