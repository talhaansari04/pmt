import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectUtilsService } from 'src/app/services/project-utils.service';
import { DumpData } from 'src/app/InsightGlobal/dump-data';
import { InsightConstant } from 'src/app/InsightGlobal/insight-constant';
import { LoaderComponent } from 'src/app/component/loader/loader.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @ViewChild(LoaderComponent, { static: false }) loader: LoaderComponent;
  model: any = { sess: 'Select', branch: 'Select', group: 'Select', depart: 'Select' };
  dropDown: any;
  constructor(private projectUtils: ProjectUtilsService) { }

  ngOnInit() {
    this.initDropDown();
  }
  doOnRegister() {
    debugger
    this.loader.showLoader();
    console.log(this.model);


    const body = this.projectUtils.getBodyOfHttp('name', this.model.name).set('enroll_number', this.model.enrollNumber)
      .set('roll_number', this.model.rollNumber).set('branch', this.model.branch).set('session', this.model.sess)
      .set('department', this.model.depart).set('group', this.model.group).set('email', this.model.email)
      .set('mobile', this.model.mobile).set('status', 'active');
    const token = this.projectUtils.getToken();
    this.projectUtils.postMapping(InsightConstant.STUDENT_REGISTRATION, body, '').subscribe((data) => {
      this.loader.hideLoader();
      if (data['status'] === 'success') {
        this.projectUtils.openSnackBar('Student', 'Registered');
      }
      if (data['fail'] === 'fail') {
        this.projectUtils.openSnackBar('Student', 'Registration Failed');
      }
      if (data['fail'] === 'exist') {
        this.projectUtils.openSnackBar('Student', 'Already Registered');
      }
      this.reset();
    }, (errors: any) => {
      this.loader.hideLoader();
    });
  }
  initDropDown() {
    this.dropDown = DumpData.dropDown;
  }
  reset() {
    this.model = { sess: 'Select', branch: 'Select', group: 'Select', depart: 'Select' };
  }
}
