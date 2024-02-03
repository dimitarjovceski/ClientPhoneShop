import { Phone } from "./Phone";

export class CartItem {
  constructor(phone: Phone){
    this.phone = phone;
  }
  phone!: Phone
  quantity: number = 1;

  get price():number {
    return this.phone.price * this.quantity;
  }
}
