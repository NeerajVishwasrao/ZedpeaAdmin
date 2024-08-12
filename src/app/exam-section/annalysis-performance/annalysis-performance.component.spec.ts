import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnalysisPerformanceComponent } from './annalysis-performance.component';

describe('AnnalysisPerformanceComponent', () => {
  let component: AnnalysisPerformanceComponent;
  let fixture: ComponentFixture<AnnalysisPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnalysisPerformanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnalysisPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
