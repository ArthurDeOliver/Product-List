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
import * as product from "../data.json";

console.log(product[1].name);
