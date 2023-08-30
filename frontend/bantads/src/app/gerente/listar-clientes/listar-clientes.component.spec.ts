import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarClientesComponent } from './listar-clientes.component';

describe('ListarClientesComponent', () => {
  let component: ListarClientesComponent;
  let fixture: ComponentFixture<ListarClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarClientesComponent]
    });
    fixture = TestBed.createComponent(ListarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
