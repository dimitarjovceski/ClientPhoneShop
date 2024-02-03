import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/Cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/CartItem';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  cart!: Cart;
  constructor(private cartService: CartService, phoneService:PhoneService){
    let phones = phoneService.getAll()

    cartService.addToCart(phones[1])
    cartService.addToCart(phones[2])
    cartService.addToCart(phones[3])

    this.setCart();
  }
  ngOnInit(): void {

  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.phone.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityToStr: string){
    const quantity = parseInt(quantityToStr);
    this.cartService.changeQuantity(cartItem.phone.id, quantity);
    this.setCart();
  }

}
