import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousdetailsComponent } from './tousdetails.component';

describe('TousdetailsComponent', () => {
  let component: TousdetailsComponent;
  let fixture: ComponentFixture<TousdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TousdetailsComponent]
    });
    fixture = TestBed.createComponent(TousdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
