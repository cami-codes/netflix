import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoQualityComponent } from './video-quality.component';

describe('VideoQualityComponent', () => {
  let component: VideoQualityComponent;
  let fixture: ComponentFixture<VideoQualityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoQualityComponent]
    });
    fixture = TestBed.createComponent(VideoQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
