import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';
import { Phone } from '../models/Phone';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart()

  addToCart(phone: Phone){
    let cartItem = this.cart.items.find(item => item.phone.id === phone.id);

    if(cartItem){
      this.changeQuantity(phone.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(phone));
  }

  removeFromCart(phoneId: number){
    this.cart.items = this.cart.items.filter(item => item.phone.id != phoneId)
  };

  changeQuantity(phoneId: number, quantity: number){
    let cartItem = this.cart.items.find(item => item.phone.id === phoneId);

    if(!cartItem) return;

    cartItem.quantity = quantity;
  }

  getCart(): Cart{
    return this.cart;
  }
}
