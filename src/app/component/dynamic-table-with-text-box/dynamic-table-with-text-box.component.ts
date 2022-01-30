import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { KeyValue } from '@angular/common';
import { CommonService } from 'src/app/services/common.service';
import { ProjectUtilsService } from 'src/app/services/project-utils.service';
import { LoaderComponent } from '../loader/loader.component';


@Component({
  selector: 'app-dynamic-table-with-text-box',
  templateUrl: './dynamic-table-with-text-box.component.html',
  styleUrls: ['./dynamic-table-with-text-box.component.css']
})
export class DynamicTableWithTextBoxComponent implements OnInit {
  @Input() tableData: Array<any>;
  @Input() filterByElement: string;
  @Input() checkBoxKey: any;
  @Output() processComplete: EventEmitter<any> = new EventEmitter();
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
  getSelectedData(list) {
    this.processComplete.emit(list);
  }

  dissablePagignation() {
    let condition;
    if (this.data.length < 10) {
      condition = true;
    } else {
      condition = false;
    }
    return condition;
  }
}
