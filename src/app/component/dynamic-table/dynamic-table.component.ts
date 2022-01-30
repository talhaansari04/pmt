import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { LoaderComponent } from '../loader/loader.component';
import { CommonService } from 'src/app/services/common.service';
import { ProjectUtilsService } from 'src/app/services/project-utils.service';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css'],
  providers: [ProjectUtilsService]

})
export class DynamicTableComponent implements OnInit {
  @Input() tableData: Array<any>;
  @Input() filterByElement: string;
  @Input() checkBoxKey: any;
  private keyElement: any;
  private showTable = false;
  private data: Array<any>;
  private checkBoxTracker = [];
  private startIndex = 0;
  private endIndex = 10;
  constructor(private commonServices: CommonService, private projecUtil: ProjectUtilsService) {
  }
  ngOnInit() {
    this.initializeData();
  }
  private originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }
  private initializeData() {
    if (this.tableData == null) {
      this.showTable = false;
      this.projecUtil.openSnackBar('Data', 'Not Found');
    } else {
      this.keyElement = this.filterByElement;
      this.data = this.tableData;
      this.addCheckBoxCondition();
      this.showTable = true;
    }
  }


  private onDoItCheckBox(event, item: any) {
    const checkBoxValue = item[this.keyElement];
    const checkBoxStatus = event.target.checked;
    this.updateCheckedData(checkBoxStatus, checkBoxValue);
    this.blockCheckBox(event, checkBoxValue, checkBoxStatus);
  }
  private updateCheckedData(checkBoxStatus, checkBoxValue) {
    this.data.forEach((value) => {
      if (value[this.keyElement] === checkBoxValue) {
        if (checkBoxStatus === true) {
          value.checked = true;
          this.checkBoxTracker.push(checkBoxValue);
        } else {
          value.checked = false;
          this.removeItem(checkBoxValue);
        }
      }
    });
  }
  private addCheckBoxCondition() {
    this.data.forEach((value) => {
      if (true) {
        value.checked = false;
      }
    });
  }
  private removeItem(checkBoxValue) {
    const removeIndex = this.checkBoxTracker.findIndex(item => item === checkBoxValue);
    if (removeIndex !== -1) {
      this.checkBoxTracker.splice(removeIndex, 1);
    }
  }

  private blockCheckBox(event, checkBoxValue, checkBoxStatus) {
    if (this.checkBoxTracker.length > 3) {
      this.removeItem(checkBoxValue);
      this.updateCheckedData(false, checkBoxValue);
      event.preventDefault();
      this.projecUtil.openSnackBar('*Restriction', 'Only Three Student can be select');
    } else {
      event.returnValue = true;
    }
  }

  private updateIndex(index) {
    this.startIndex = index * 10;
    this.endIndex = this.startIndex + 10;
  }
  private updateFirstAndLastIndex() {
    this.startIndex = 0;
    this.endIndex = 10;
  }
  private updateLastIndex() {
    this.startIndex = this.data.length - 10;
    this.endIndex = this.data.length;
  }
  public getCheckBoxSeletedData() {
    return this.checkBoxTracker;
  }
  reset() {
    this.addCheckBoxCondition();
    this.checkBoxTracker = [];
  }
}
