import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainClaseComponent } from './main-clase.component';

describe('MainClaseComponent', () => {
  let component: MainClaseComponent;
  let fixture: ComponentFixture<MainClaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainClaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
