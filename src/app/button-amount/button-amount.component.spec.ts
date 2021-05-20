import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAmountComponent } from './button-amount.component';

describe('ButtonAmountComponent', () => {
  let component: ButtonAmountComponent;
  let fixture: ComponentFixture<ButtonAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
