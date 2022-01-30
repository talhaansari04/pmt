import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { LoaderComponent } from 'src/app/component/loader/loader.component';
import { ProjectUtilsService } from 'src/app/services/project-utils.service';
import { InsightConstant } from 'src/app/InsightGlobal/insight-constant';
import { error } from 'protractor';
import { DumpData } from 'src/app/InsightGlobal/dump-data';

@Component({
  selector: 'app-guide-management',
  templateUrl: './guide-management.component.html',
  styleUrls: ['./guide-management.component.css']
})
export class GuideManagementComponent implements OnInit {
  @ViewChild(LoaderComponent, { static: true }) loader: LoaderComponent;
  tableShow = false;
  tableData;
  changetab = 'One';
  openCreateTab = true;
  openEditTab = true;
  mySelectedList: any;
  dropDown: any;
  formModel: any = {};
  constructor(private commonServices: CommonService, private projectUtils: ProjectUtilsService) {

  }

  ngOnInit() {
    this.getAllGuideList();
    this.initDropDown();
  }
  initDropDown() {
    this.dropDown = DumpData.dropDown;
  }
  getAllGuideList() {
    this.loader.showLoader();
    const token = this.projectUtils.getToken();
    const body = this.projectUtils.getBodyOfHttp('', '');
    this.projectUtils.postMapping(InsightConstant.GUIDE_LIST, body, token).subscribe((data) => {
      this.tableData = data;
      this.tableShow = true;
      this.loader.hideLoader();
    }, (errors: any) => {
      this.loader.hideLoader();
      this.tableShow = false;
      this.projectUtils.openSnackBar('Record', 'Not Found');
    });
  }
  selectData(list) {
    this.mySelectedList = list;
    console.log(list);
  }


  onSubmit() {
    const FACULTYID = this.formModel.facultyID;
    const FACULTYNAME = this.formModel.facultyName;
    const SPECIAL = this.formModel.specialization;
    const MOBILE = this.formModel.mobile;
    const EMAIL = this.formModel.email;
    const DOJ = this.formModel.doj;
    const GENDER = this.formModel.gender;
    console.log(this.formModel);
    this.loader.showLoader();
    const token = this.projectUtils.getToken();
    const body = this.projectUtils.getBodyOfHttp('faculty_id', FACULTYID).set('faculty_name', FACULTYNAME)
      .set('specialization', SPECIAL).set('mobile_number', MOBILE).set('email', EMAIL).set('doj', DOJ).set('gender', GENDER);
    this.projectUtils.postMapping(InsightConstant.GUIDE_LOAD, body, token).subscribe((data) => {
      if (data.success === 'Done') {
        this.projectUtils.openSnackBar('Guide', 'Load Successfully');
      } else if (data.success === 'Exist') {
        this.projectUtils.openSnackBar('Guide', 'Alrady Exist');
      } else {
        this.projectUtils.openSnackBar('Guide', 'Failed');
      }
      this.loader.hideLoader();
      this.resetValue();
    }, (errors: any) => {
      this.loader.hideLoader();
      this.projectUtils.openSnackBar('Guide', 'Failed');
    });

  }
  openTab(tabName) {
    this.switchTab(tabName);
  }

  closeTab(tab: string) {
    this.openEditTab = true;
    this.switchTab('One');
  }
  switchTab(val) {
    switch (val) {
      case 'One':
        this.changetab = 'One';
        this.openCreateTab = true;
        this.openEditTab = true;
        break;
      case 'Two':
        this.changetab = 'Two';
        this.openCreateTab = false;
        this.openEditTab = true;
        break;
      case 'Three':
        this.changetab = 'Three';
        this.openCreateTab = true;
        this.openEditTab = false;
        break;

      default:
        break;
    }
  }
  resetValue() {
    this.formModel = {};
    this.getAllGuideList();
  }
}
