import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAllotmentComponent } from './project-allotment.component';

describe('ProjectAllotmentComponent', () => {
  let component: ProjectAllotmentComponent;
  let fixture: ComponentFixture<ProjectAllotmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectAllotmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAllotmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
