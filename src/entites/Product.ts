import { v4 as uuidv4 } from "uuid";
import { Cart } from "./Cart";

export class Product {
  private _id: string = uuidv4();
  private _name: string;
  private _category: string;
  private _price: number;
  private _imageUrl: string;
  private _quantity: number = 0;
  private _total: number = 0;

  constructor(name: string, category: string, price: number, imageUrl: string) {
    this._name = name;
    this._category = category;
    this._price = price;
    this._imageUrl = imageUrl;
  }

  toHTML() {
    const productListHTML = document.getElementById("product-list");

    if (!productListHTML) return;

    const productHTML = document.createElement("li");
    productHTML.className = "DessertItem";
    productHTML.id = this._id;

    productHTML.innerHTML = `
             <img
               class="DessertImg"
               src="${this._imageUrl}"
               alt="${this._name}"
             />

             <footer>
               <div class="btnWrapper">
                 <button class="btnCard" id="button-add-to-cart">
                   <img src="./assets/images/icon-add-to-cart.svg" alt="" />
                   <span>Add to cart</span>
                 </button>
                 <button class="btnAdd" id="cartSelect">
                   <div id="decrimentItem">
                     <img src="./assets/images/icon-decrement-quantity.svg" alt="">
                   </div>
                   <span id="quantityItem">${this._quantity}</span>
                   <div id="incrementItem">
                     <img src="./assets/images/icon-increment-quantity.svg" alt="">
                   </div>
                 </button>
               </div>

               <div class="DessertDescription">
                 <span class="name">${this._category}</span>
                 <span class="type"><strong>${this._name}</strong></span>
                 <span class="price">$${this.price}</span>
               </div>

            </footer>

     `;

    const buttonAddToCartHTML = productHTML.querySelector(
      "#button-add-to-cart"
    ) as HTMLElement;

    buttonAddToCartHTML?.addEventListener("click", () => {
      this.incrementQuantity();
      buttonAddToCartHTML.style.zIndex = "-1";
    });

    const btnIncrement = productHTML.querySelector(
      "#incrementItem"
    ) as HTMLElement;

    btnIncrement.addEventListener("click", () => {
      this.incrementQuantity();
    });

    const btnDecrement = productHTML.querySelector(
      "#decrimentItem"
    ) as HTMLElement;

    btnDecrement.addEventListener("click", () => {
      this.decrementQuantity();
    });

    productListHTML.appendChild(productHTML);
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get quantity() {
    return this._quantity;
  }

  get total() {
    return this._total;
  }

  get price() {
    return this._price;
  }

  calculateTotal() {
    this._total = this._quantity * this._price;
  }

  incrementQuantity() {
    this._quantity++;
    this.calculateTotal();
    console.log(`quantity:`, this._quantity);

    const itemCard = document.getElementById(this._id);
    const quantityItem = itemCard?.querySelector(
      "#quantityItem"
    ) as HTMLElement;

    quantityItem.innerHTML = `${this._quantity}`;

    const quantityInfo = Cart.addToCart(this);
  }

  decrementQuantity() {
    this._quantity--;
    this.calculateTotal();
    console.log(this._quantity);

    const itemCard = document.getElementById(this._id);
    const quantityItem = itemCard?.querySelector(
      "#quantityItem"
    ) as HTMLElement;

    quantityItem.innerHTML = `${this._quantity}`;

    const buttonAddToCartHTML = itemCard?.querySelector(
      "#button-add-to-cart"
    ) as HTMLElement;

    if (this._quantity == 0) {
      buttonAddToCartHTML.style.zIndex = "1";
    }

    const quantityInfo = Cart.removeProduct(this);
  }
}
