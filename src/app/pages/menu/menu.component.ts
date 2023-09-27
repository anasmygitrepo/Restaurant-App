import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/sharepages/services/order.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  fooddata: any;
  constructor(private service: OrderService) {}

  ngOnInit(): void {
    this.fooddata = this.service.foods;
  }
}
