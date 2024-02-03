import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { Phone } from '../models/Phone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  phones: Phone[] = [];

  constructor(private phoneService:PhoneService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params?.['searchTerm'])
        this.phones = this.phoneService.getAll().filter(phone =>
      phone.name.toLowerCase().includes(params?.['searchTerm'].toLowerCase()))
      else if(params?.['category'])
          this.phones = this.phoneService.getAllPhonesByCategory(params?.['category']);
      else
          this.phones = this.phoneService.getAll()
    })

    this.phones = this.phoneService.getAll();
  }
}
