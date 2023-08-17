import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrarComponent } from './entrar.component';

describe('LoginComponent', () => {
  let component: EntrarComponent;
  let fixture: ComponentFixture<EntrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntrarComponent]
    });
    fixture = TestBed.createComponent(EntrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
