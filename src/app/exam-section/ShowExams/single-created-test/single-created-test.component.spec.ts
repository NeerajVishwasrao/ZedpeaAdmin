import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedTestComponent } from './single-created-test.component';

describe('CreatedTestComponent', () => {
  let component: CreatedTestComponent;
  let fixture: ComponentFixture<CreatedTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatedTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
