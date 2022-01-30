import { Component, OnInit, ViewChild } from '@angular/core';
import { DumpData } from 'src/app/InsightGlobal/dump-data';
import { InsightConstant } from 'src/app/InsightGlobal/insight-constant';
import { CommonService } from 'src/app/services/common.service';
import { ProjectUtilsService } from 'src/app/services/project-utils.service';
import { LoaderComponent } from 'src/app/component/loader/loader.component';

@Component({
  selector: 'app-guide-allotment',
  templateUrl: './guide-allotment.component.html',
  styleUrls: ['./guide-allotment.component.css']
})
export class GuideAllotmentComponent implements OnInit {

  @ViewChild(LoaderComponent, { static: false }) loader: LoaderComponent;
  model: any = { sess: 'Select', branch: 'Select' };
  tabData: any = { project: 'Select', platform: 'Select' };
  dropDown: any;
  tableData: Array<any> = this.commonService.data;
  tableDataShow = false;
  changetab = 'One';
  openEditTab = true;
  mySelectedList: any;
  showList = false;
  list;
  constructor(private commonService: CommonService, private projectUtils: ProjectUtilsService) {

  }
  ngOnInit() {
    this.initDropDown();
  }
  goToData() {
    this.tableDataShow = true;
  }
  getAllotedStudentList() {
    const branch = this.model.branch;
    const session = this.model.sess;
    this.tableDataShow = false;
    this.loader.showLoader();
    const token = this.projectUtils.getToken();
    const body = this.projectUtils.getBodyOfHttp('branch', branch)
      .set('session', session).set('project_status', '1').set('guide_status', '0');
    this.projectUtils.postMapping(InsightConstant.ALLOTED_PROJECT_LIST, body, token).subscribe((data) => {
      if (data[0]['failed'] === 'fail') {
        this.dissableTableMetaData();
      } else {
        this.loader.hideLoader();
        this.tableData = data;
        this.tableDataShow = true;
      }

    }, (errors: any) => {
      this.projectUtils.expireJWT();
      this.dissableTableMetaData();
    });

  }
  initDropDown() {
    this.dropDown = DumpData.dropDown;
  }
  dissableTableMetaData() {
    this.loader.hideLoader();
    this.tableDataShow = false;
    this.projectUtils.openSnackBar('Record', 'Not Found');
  }
  switchTab(val) {
    switch (val) {
      case 'One':
        this.changetab = 'One';
        break;
      case 'Two':
        this.changetab = 'Two';
        break;
      case 'Three':
        this.changetab = 'Three';
        break;

      default:
        break;
    }
  }
  openTab(list) {
    this.mySelectedList = list;
    console.log(list);
    this.openEditTab = false;
    this.switchTab('Three');

  }
  closeTab() {
    this.openEditTab = true;
    this.switchTab('One');
  }
  allotProject() {
    debugger
    const groupName = this.mySelectedList['ID.'];
    const projectName = this.tabData.projectname;
    const projectType = this.tabData.project;
    const platform = this.tabData.platform;
    this.loader.showLoader();
    const token = this.projectUtils.getToken();
    const body = this.projectUtils.getBodyOfHttp('group_id', groupName)
      .set('project_name', projectName).set('project_status', '1').set('project_type', projectType).set('platform', platform);
    this.projectUtils.postMapping(InsightConstant.PROJECT_ALLOTMENT, body, token).subscribe((data) => {
      if (data['status'] === 'success') {
        this.onSuccess();
      } else {
        this.loader.hideLoader();
        this.onFailed();
      }

    }, (errors: any) => {
      this.projectUtils.expireJWT();
      this.onFailed();
    });

  }
  search(key: string) {
    if (key.length > 3) {
      this.showList = true;
      this.list = DumpData.dropDown;
    } else {
      this.showList = false;
    }
    console.log('Search Box ' + key);
  }
  onSuccess() {
    this.loader.hideLoader();
    this.projectUtils.openSnackBar('Successfully', 'Project Alloted');
    this.closeTab();
    this.getAllotedStudentList();
  }
  onFailed() {
    this.loader.hideLoader();
    this.projectUtils.openSnackBar('Failed', 'Project Alloted');
  }
}
