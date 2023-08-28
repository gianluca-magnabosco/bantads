import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositoComponent } from './deposito.component';

describe('DepositoComponent', () => {
  let component: DepositoComponent;
  let fixture: ComponentFixture<DepositoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositoComponent]
    });
    fixture = TestBed.createComponent(DepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
