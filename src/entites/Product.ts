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

  calculateTotal() {
    this._total = this._quantity * this._price;
  }

  incrementQuantity() {
    this._quantity++;
    this.calculateTotal();

    Cart.addToCart(this);
  }

  decrementQuantity() {
    this._quantity--;
    this.calculateTotal();
  }

  toHTML() {
    const productListHTML: HTMLElement | null =
      document.getElementById("product-list");

    const productCard = document.createElement("li");
    productCard.className = "DessertItem";

    productCard.innerHTML = `
             <img
               class="DessertImg"
               src="${this._imageUrl}"
               alt="${this._name}"
             />

             <footer>
               <div class="btnWrapper">
                 <button class="btnCard" id="addToCart" onclick=addToCartDesaparecer()>
                   <img src="./assets/images/icon-add-to-cart.svg" alt="" />
                   <span>Add to cart</span>
                 </button>
                 <button class="btnAdd">
                   <div>
                     <img src="./assets/images/icon-decrement-quantity.svg" alt="">
                   </div>
                   <span>0</span>
                   <div>
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

    productListHTML?.appendChild(productCard);
  }

  get price() {
    return this._price;
  }

  get quantity() {
    return this._quantity;
  }

  get id() {
    return this._id;
  }

  get total() {
    return this._total;
  }
}
