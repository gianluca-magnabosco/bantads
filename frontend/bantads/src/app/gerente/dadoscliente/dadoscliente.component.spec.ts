import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosClienteComponent } from './dadoscliente.component';

describe('DadosClienteComponent', () => {
  let component: DadosClienteComponent;
  let fixture: ComponentFixture<DadosClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadosClienteComponent]
    });
    fixture = TestBed.createComponent(DadosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
