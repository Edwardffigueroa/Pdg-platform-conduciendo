import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCursoComponent } from './main-curso.component';

describe('MainCursoComponent', () => {
  let component: MainCursoComponent;
  let fixture: ComponentFixture<MainCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
