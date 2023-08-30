import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirGerenteComponent } from './inserir-gerente.component';

describe('InserirGerenteComponent', () => {
  let component: InserirGerenteComponent;
  let fixture: ComponentFixture<InserirGerenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InserirGerenteComponent]
    });
    fixture = TestBed.createComponent(InserirGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
