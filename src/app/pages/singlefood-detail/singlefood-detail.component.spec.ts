import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglefoodDetailComponent } from './singlefood-detail.component';

describe('SinglefoodDetailComponent', () => {
  let component: SinglefoodDetailComponent;
  let fixture: ComponentFixture<SinglefoodDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglefoodDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglefoodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
