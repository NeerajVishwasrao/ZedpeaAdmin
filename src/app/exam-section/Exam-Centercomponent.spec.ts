import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSectionComponent } from './Exam-Center.component';

describe('ExamSectionComponent', () => {
  let component: ExamSectionComponent;
  let fixture: ComponentFixture<ExamSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
