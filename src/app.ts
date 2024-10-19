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

// const product1 = new Product("Banana", "Fruta", 10, "http://example.com");
// product1.incrementQuantity();
// product1.incrementQuantity();
// product1.incrementQuantity();

// const product2 = new Product("Maçã", "Fruta", 5, "http://example.com");
// product2.incrementQuantity();
// product2.incrementQuantity();

// Cart.removeProduct(product1);

// console.log(Cart);
