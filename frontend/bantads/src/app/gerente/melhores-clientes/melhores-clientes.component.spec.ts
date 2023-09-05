import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelhoresClientesComponent } from './melhores-clientes.component';

describe('MelhoresClientesComponent', () => {
  let component: MelhoresClientesComponent;
  let fixture: ComponentFixture<MelhoresClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MelhoresClientesComponent]
    });
    fixture = TestBed.createComponent(MelhoresClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
