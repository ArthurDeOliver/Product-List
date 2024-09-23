/*
* Executar código ts comando ts-node {nome do arquivo}
* executar o ts init na raíz do projeto e modificar o tsconfig.json para permitir import de json
*   "compilerOptions": {
*    "resolveJsonModule": true,
*    "esModuleInterop": true
! instalar sass globalmente e ver se instalou usando o comando -> npm list -g --depth=0
* Sass instalado compilar: sass index.scss:output.css
* watch sass --watch input.scss output.css
*/

import { Produto } from "./entites/Produto";
import * as p from "../data.json";
import { Cart } from "./entites/Cart";

const cart = new Cart();
// console.log(cart);

const produto1 = new Produto("http://example.com", "Fruta", "Maca", 10);
const produto2 = new Produto("http://example.com", "Fruta", "banana", 30);

cart.addToCart(produto1);
cart.addToCart(produto2);

console.log(cart);
console.log(cart.product);
console.log(cart.total);

function addToCartDesaparecer() {
  console.log("teste");
  const button = document.getElementById("addToCart");

  button.style.zIndex = "0";
}
