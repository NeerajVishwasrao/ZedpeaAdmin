import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCreatedTestComponent } from './ShowExamscomponent';

describe('ShowCreatedTestComponent', () => {
  let component: ShowCreatedTestComponent;
  let fixture: ComponentFixture<ShowCreatedTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCreatedTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCreatedTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
