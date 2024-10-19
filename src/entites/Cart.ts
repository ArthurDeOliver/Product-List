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
    const productInCart = this._products.find((item) => item.id === product.id);

    if (productInCart) {
      -productInCart.quantity; // Decrementa a quantidade

      // Remove o produto se a quantidade for 0
      if (productInCart.quantity <= 0) {
        this._products = this._products.filter(
          (item) => item.id !== product.id
        );
      }
    }

    this.calculateTotal();
    this.renderCart(); // Atualiza a renderização do carrinho
  }

  static addToCart(product: Product) {
    const productInCart = this._products.find((item) => item.id === product.id);

    if (productInCart) {
      +productInCart.quantity; // Aumenta a quantidade se já estiver no carrinho
    } else {
      this._products.push(product); // Adiciona o produto ao carrinho
    }

    this.calculateTotal();
    this.renderCart(); // Atualiza a renderização do carrinho
  }

  static get products() {
    return this._products;
  }

  static get total() {
    return this._orderTotal;
  }

  static get totalQuantity() {
    return this._totalQuantity;
  }

  static renderCart() {
    const aside = document.getElementById("cartContainer");

    // Remove todos os itens do carrinho antes de renderizar novamente
    aside!.innerHTML = "";

    // Verifica a quantidade total
    console.log("Total Quantity: ", this._totalQuantity); // Log para depuração

    if (this._totalQuantity === 0) {
      // Se o carrinho estiver vazio, exibe a mensagem de carrinho vazio
      const cartEmpty = document.createElement("div");
      cartEmpty.className = "empty";
      cartEmpty.id = "emptyId";

      cartEmpty.innerHTML = `
        <header><h2>Your cart (0)</h2></header>
        <img class="imgEmpty" src="./assets/images/illustration-empty-cart.svg" alt="Empty cart illustration">
        <span>Your added items will appear here</span>
      `;

      aside?.appendChild(cartEmpty);
    } else {
      // Exibe os itens no carrinho
      const cartNoEmpty = document.createElement("div");
      cartNoEmpty.className = "no-empty";
      cartNoEmpty.id = "idNoEmpty";

      const dessertCount = Cart.totalQuantity; // Aqui obtemos a contagem real dos itens

      cartNoEmpty.innerHTML = `
        <header><h2>Your cart <span id="dessertsCount">(${dessertCount})</span></h2></header>
        <ul class="cartItens">
          ${Cart.products
            .map(
              (product) =>
                `
                <li>
                  <div>
                    <span><strong>${product.name}</strong></span>
                    <div class="calc">
                      <span>${product.quantity}x</span>
                      <span>$${product.price.toFixed(2)}</span>
                      <span>$${product.total.toFixed(2)}</span>
                    </div>
                  </div>
                  <button class="remove" onclick="Cart.removeProduct(${
                    product.id
                  })">
                    <img src="./assets/images/icon-remove-item.svg" alt="Remove item">
                  </button>
                </li>
              `
            )
            .join("")}
        </ul>
        <div class="cartInfo">
          <div class="totalWrapper">
            <span class="totalTxt">Order total</span>
            <span class="Totalprice">$${Cart.total.toFixed(2)}</span>
          </div>
          <span class="carbon"><img src="./assets/images/icon-carbon-neutral.svg" alt="">
            This is a <strong>carbon-neutral</strong> delivery
          </span>
          <button>Confirm Order</button>
        </div>
      `;

      aside?.appendChild(cartNoEmpty);
    }
  }
}
