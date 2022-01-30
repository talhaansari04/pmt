import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ProjectUtilsService } from 'src/app/services/project-utils.service';
import { LoaderComponent } from 'src/app/component/loader/loader.component';
import { InsightConstant } from 'src/app/InsightGlobal/insight-constant';
import { DumpData } from 'src/app/InsightGlobal/dump-data';
import { DynamicTableComponent } from 'src/app/component/dynamic-table/dynamic-table.component';

@Component({
  selector: 'app-group-allotment',
  templateUrl: './group-allotment.component.html',
  styleUrls: ['./group-allotment.component.css']
})
export class GroupAllotmentComponent implements OnInit {
  @ViewChild(LoaderComponent, { static: false }) loader: LoaderComponent;
  @ViewChild(DynamicTableComponent, { static: false }) dynamicTable: DynamicTableComponent;
  tableData: Array<any>;
  tableDataShow = false;
  dropDown: any;
  branch: any;
  session: any;
  model: any = { sess: 'Select', branch: 'Select' };
  keyElement = 'Enrollemnt No.';
  constructor(private commonService: CommonService, private projectUtil: ProjectUtilsService) {

  }
  ngOnInit() {
    this.initDropDown();
  }
  initDropDown() {
    this.dropDown = DumpData.dropDown;
  }
  goToData() {
    console.log(this.model);
    const branch = this.model.branch;
    const session = this.model.sess;
    this.tableDataShow = false;
    this.loader.showLoader();
    const body = this.projectUtil.getBodyOfHttp('status', 'active').set('branch', branch).set('session', session);
    const token = localStorage.getItem('token');
    this.projectUtil.postMapping(InsightConstant.FETCH_STUDENT, body, token).subscribe((data) => {
      if (data[0]['failed'] === 'fail') {
        this.dissableTableMetaData();
      } else {
        this.loader.hideLoader();
        this.tableData = data;
        this.tableDataShow = true;
      }
    }, (error: any) => {
      this.projectUtil.expireJWT();
      this.loader.hideLoader();
    });
  }
  getGroupAllotmentHttpService(selectedStudent: string) {
    this.loader.showLoader();
    const body = this.projectUtil.getBodyOfHttp('enrollment_number', selectedStudent);
    const token = localStorage.getItem('token');
    this.projectUtil.postMapping(InsightConstant.GROUP_ALLOTMENT, body, token).subscribe((data) => {
      this.loader.hideLoader();
      if (data['status'] === 'success') {
        this.projectUtil.openSnackBar('Group Alloted', 'Successfuly');
      } else {
        this.projectUtil.openSnackBar('Group Alloted', 'Failed');
      }
      this.goToData();
    }, (error: any) => {
      this.projectUtil.expireJWT();
      this.loader.hideLoader();
    });
  }
  getSelectedValue() {
    const data = this.dynamicTable.getCheckBoxSeletedData();
    const selectedStudent = data.toString();
    if (data.length <= 1) {
      this.projectUtil.openSnackBar('Please', 'Select Minimum 2 or 3 Students');
    } else {
      this.getGroupAllotmentHttpService(selectedStudent);
    }
  }
  dissableTableMetaData() {
    this.loader.hideLoader();
    this.tableDataShow = false;
    this.projectUtil.openSnackBar('Data', 'Not Available');
  }
}
