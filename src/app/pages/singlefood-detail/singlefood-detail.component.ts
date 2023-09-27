import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/sharepages/services/order.service';

@Component({
  selector: 'app-singlefood-detail',
  templateUrl: './singlefood-detail.component.html',
  styleUrls: ['./singlefood-detail.component.css'],
})
export class SinglefoodDetailComponent implements OnInit {
  constructor(private param: ActivatedRoute, private service: OrderService) {}
  foodId: any;
  food: any;
  ngOnInit(): void {
    this.foodId = this.param.snapshot.paramMap.get('id');
    this.food = this.service.foods.filter((x) => x.id == this.foodId);
    console.log(this.food);
  }
}
