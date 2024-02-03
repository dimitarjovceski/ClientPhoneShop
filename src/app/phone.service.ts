import { Injectable } from '@angular/core';
import { Phone } from './models/Phone';
import { Category } from './models/Category';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor() { }

  getPhoneById(id: number): Phone{
    return this.getAll().find(phone => phone.id == id)!;
  }
  getAllCategories(): Category[]{
    return [
      {name: 'All', count: 6},
      {name: 'New', count: 4},
      {name: 'Used', count: 2}
    ]
  }

  getAllPhonesByCategory(category: string): Phone[]{
    return category == "All" ? this.getAll() :
    this.getAll().filter(phone => phone.category?.includes(category))
  }
  getAll(): Phone[]{
    return [
      {
        id:1,
        name: 'phone 13 Pro',
        description: 'Iphone 13 pro with 128 GB memory',
        price: 550,
        imageUrl:'/assets/images/phone-1.jpg',
        category: "New"
      },
      {
        id:2,
        name: 'Iphone 13 Pro',
        description: 'Iphone 13 pro with 256 GB memory',
        price: 600,
        imageUrl:'/assets/images/phone-2.jpg',
        category: "New"
      },
      {
        id:3,
        name: 'Iphone 13 Pro',
        description: 'Iphone 13 pro with 128 GB memory',
        price: 520,
        imageUrl:'/assets/images/phone-3.jpg',
        category: "New"
      },
      {
        id:4,
        name: 'Iphone 13 Pro',
        description: 'Iphone 13 pro with 128 GB memory',
        price: 500,
        imageUrl:'/assets/images/phone-4.jpg',
        category: "New"
      },
      {
        id:5,
        name: 'Iphone 13 Pro',
        description: 'Iphone 13 pro with 128 GB memory',
        price: 470,
        imageUrl:'/assets/images/phone-5.jpg',
        category: "Used"
      },
      {
        id:6,
        name: 'Iphone 13 Pro',
        description: 'Iphone 13 pro with 128 GB memory',
        price: 480,
        imageUrl:'/assets/images/phone-6.jpg',
        category: "Used"
      },
    ]
  }
}
