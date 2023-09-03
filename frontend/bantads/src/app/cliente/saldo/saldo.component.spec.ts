import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoComponent } from './saldo.component';

describe('SaldoComponent', () => {
  let component: SaldoComponent;
  let fixture: ComponentFixture<SaldoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaldoComponent]
    });
    fixture = TestBed.createComponent(SaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
