import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneService } from '../phone.service';
import { Phone } from '../models/Phone';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css'],
})
export class PhoneDetailComponent implements OnInit {
  phone!: Phone;
  constructor(
    private activatedRoute: ActivatedRoute,
    private phoneService: PhoneService,
    private cartService: CartService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params?.['id'])
        this.phone = this.phoneService.getPhoneById(params?.['id']);
    });
  }

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart(this.phone);
    this.router.navigateByUrl('/cart-page');
  }
}
