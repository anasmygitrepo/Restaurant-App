import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  foods = [
    {
      id: 1,
      name: 'Fried veg',
      fooddetail: 'made by all vegitabls',
      price: 145,
      img: '../../../assets/images/food1.jpg',
    },
    {
      id: 2,
      name: 'Chicken Biriyani',
      fooddetail: 'made chiken with rice',
      price: 200,
      img: '../../../assets/images/food2.jpg',
    },
    {
      id: 3,
      name: 'Chiken Pitza',
      fooddetail: 'made by chicken',
      price: 400,
      img: '../../../assets/images/food3.jpg',
    },
    {
      id: 4,
      name: 'Beef Steak',
      fooddetail: 'made by beef',
      price: 300,
      img: '../../../assets/images/food4.jpg',
    },
    {
      id: 5,
      name: 'chicken Tikka',
      fooddetail: 'made by chicken',
      price: 340,
      img: '../../../assets/images/food5.jpg',
    },
  ];
}
