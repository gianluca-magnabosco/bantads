import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFormComponent } from './cadastro-form.component';

describe('CadastroFormComponent', () => {
  let component: CadastroFormComponent;
  let fixture: ComponentFixture<CadastroFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroFormComponent]
    });
    fixture = TestBed.createComponent(CadastroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
