import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @ViewChild('dobinp') dateofbirth: ElementRef | undefined;

  getdate() {
    let berth = new Date(this.dateofbirth?.nativeElement.value).getFullYear();
    console.log(berth);
  }
}
