import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { OrderService } from 'src/app/sharepages/services/order.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  fooddata: any;
  constructor(private service: OrderService) {}
  arrowright = faArrowAltCircleRight;
  ngOnInit(): void {
    this.fooddata = this.service.foods;
  }
}
