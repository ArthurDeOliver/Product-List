class Produto {
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
    //TODO    this._id = id
  }

  get price() {
    return this._price;
  }
  get name() {
    return this._name;
  }
}
