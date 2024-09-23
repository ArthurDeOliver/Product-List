import { Produto } from "./Produto";

export class Cart {
  private _quantidade: number = 0;
  private _product: Produto[] = [];
  private _total: number = 0;

  addToCart(product: Produto) {
    const productInCart = this._product.includes(product);

    if (!productInCart) {
      this._product?.push(product);
    }

    this._total += product.price;
  }

  get total() {
    return this._total;
  }

  get product() {
    return this._product;
  }
}
