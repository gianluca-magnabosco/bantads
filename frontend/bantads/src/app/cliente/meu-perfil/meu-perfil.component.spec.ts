import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPerfilComponent } from './meu-perfil.component';

describe('MeuPerfilComponent', () => {
  let component: MeuPerfilComponent;
  let fixture: ComponentFixture<MeuPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeuPerfilComponent]
    });
    fixture = TestBed.createComponent(MeuPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
