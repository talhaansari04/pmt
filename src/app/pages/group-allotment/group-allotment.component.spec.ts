import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAllotmentComponent } from './group-allotment.component';

describe('GroupAllotmentComponent', () => {
  let component: GroupAllotmentComponent;
  let fixture: ComponentFixture<GroupAllotmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupAllotmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupAllotmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
