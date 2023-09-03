import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarComponent } from './visualizar.component';

describe('VisualizarComponent', () => {
  let component: VisualizarComponent;
  let fixture: ComponentFixture<VisualizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarComponent]
    });
    fixture = TestBed.createComponent(VisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
