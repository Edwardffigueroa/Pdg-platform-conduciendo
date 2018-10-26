import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenalizacionDemarcacionComponent } from './senalizacion-demarcacion.component';

describe('SenalizacionDemarcacionComponent', () => {
  let component: SenalizacionDemarcacionComponent;
  let fixture: ComponentFixture<SenalizacionDemarcacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenalizacionDemarcacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenalizacionDemarcacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
