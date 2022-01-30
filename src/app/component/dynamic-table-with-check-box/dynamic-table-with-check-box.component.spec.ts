import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTableWithCheckBoxComponent } from './dynamic-table-with-check-box.component';

describe('DynamicTableWithCheckBoxComponent', () => {
  let component: DynamicTableWithCheckBoxComponent;
  let fixture: ComponentFixture<DynamicTableWithCheckBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTableWithCheckBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTableWithCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
