//TODO fazer os cards dos produtos serem gerados por aqui

import { v4 as uuidv4 } from "uuid";

export class Produto {
  private _imageUrl: string;
  private _category: string;
  private _name: string;
  private _price: number;
  private _id: string;

  constructor(imageUrl: string, category: string, name: string, price: number) {
    this._imageUrl = imageUrl;
    this._category = category;
    this._name = name;
    this._price = price;
    this._id = uuidv4();
  }

  get price() {
    return this._price;
  }
  get name() {
    return this._name;
  }

  // get id() {
  //   return this._id;
  // }
}
