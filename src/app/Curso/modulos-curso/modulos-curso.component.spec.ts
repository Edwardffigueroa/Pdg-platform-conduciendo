import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosCursoComponent } from './modulos-curso.component';

describe('ModulosCursoComponent', () => {
  let component: ModulosCursoComponent;
  let fixture: ComponentFixture<ModulosCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulosCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulosCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
