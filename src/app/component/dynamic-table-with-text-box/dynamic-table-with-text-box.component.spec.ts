import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTableWithTextBoxComponent } from './dynamic-table-with-text-box.component';

describe('DynamicTableWithTextBoxComponent', () => {
  let component: DynamicTableWithTextBoxComponent;
  let fixture: ComponentFixture<DynamicTableWithTextBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTableWithTextBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTableWithTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
