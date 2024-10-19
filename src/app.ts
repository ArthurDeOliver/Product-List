import { Product } from "./entites/Product";
import data from "../data.json";
import { Cart } from "./entites/Cart";

for (const product of data) {
  new Product(
    product.name,
    product.category,
    product.price,
    product.image.desktop
  ).toHTML();
}

console.log(Cart.totalQuantity);
