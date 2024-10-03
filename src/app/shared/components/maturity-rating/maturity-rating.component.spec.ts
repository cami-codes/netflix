import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaturityRatingComponent } from './maturity-rating.component';

describe('MaturityRatingComponent', () => {
  let component: MaturityRatingComponent;
  let fixture: ComponentFixture<MaturityRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaturityRatingComponent]
    });
    fixture = TestBed.createComponent(MaturityRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
