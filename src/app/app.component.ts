import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = '';

  serchddat: string = '';

  search($event: Event) {
    this.serchddat = (<HTMLInputElement>$event.target).value;
    console.log(this.serchddat);
  }
}
