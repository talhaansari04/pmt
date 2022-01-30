import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideAllotmentComponent } from './guide-allotment.component';

describe('GuideAllotmentComponent', () => {
  let component: GuideAllotmentComponent;
  let fixture: ComponentFixture<GuideAllotmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideAllotmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideAllotmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
