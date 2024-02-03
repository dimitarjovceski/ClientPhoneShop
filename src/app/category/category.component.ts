import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = []
  constructor(private phoneService: PhoneService){}

  ngOnInit(): void {
    this.categories = this.phoneService.getAllCategories();
  }

}
