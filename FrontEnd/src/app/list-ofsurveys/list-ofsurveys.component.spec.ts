import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfsurveysComponent } from './list-ofsurveys.component';

describe('ListOfsurveysComponent', () => {
  let component: ListOfsurveysComponent;
  let fixture: ComponentFixture<ListOfsurveysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfsurveysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfsurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
