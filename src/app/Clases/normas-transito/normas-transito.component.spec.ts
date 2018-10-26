import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormasTransitoComponent } from './normas-transito.component';

describe('NormasTransitoComponent', () => {
  let component: NormasTransitoComponent;
  let fixture: ComponentFixture<NormasTransitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormasTransitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormasTransitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
