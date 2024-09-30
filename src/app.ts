// importar data.json
// importar entities/product.ts
// Criar os objetos de produto utilizando os
// dados de data.json

import { Product } from "./entites/Produto";
import data from "../data.json";
import { Cart } from "./entites/Cart";

const product1 = new Product("Banana", "Fruta", 10, "http://example.com");
product1.incrementQuantity();
product1.incrementQuantity();
product1.incrementQuantity();

const product2 = new Product("Maçã", "Fruta", 5, "http://example.com");
product2.incrementQuantity();
product2.incrementQuantity();

console.log(Cart);
