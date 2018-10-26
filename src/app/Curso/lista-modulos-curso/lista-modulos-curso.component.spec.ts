import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaModulosCursoComponent } from './lista-modulos-curso.component';

describe('ListaModulosCursoComponent', () => {
  let component: ListaModulosCursoComponent;
  let fixture: ComponentFixture<ListaModulosCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaModulosCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaModulosCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
