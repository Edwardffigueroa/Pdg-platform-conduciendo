import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaseDetailsComponent } from './clase-details.component';

describe('ClaseDetailsComponent', () => {
  let component: ClaseDetailsComponent;
  let fixture: ComponentFixture<ClaseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
