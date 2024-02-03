import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutFinishComponent } from './checkout-finish.component';

describe('CheckoutFinishComponent', () => {
  let component: CheckoutFinishComponent;
  let fixture: ComponentFixture<CheckoutFinishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutFinishComponent]
    });
    fixture = TestBed.createComponent(CheckoutFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
