import { Component, OnInit, ViewChild } from '@angular/core';
import { LoaderComponent } from 'src/app/component/loader/loader.component';
import { ProjectUtilsService } from 'src/app/services/project-utils.service';
import { InsightConstant } from 'src/app/InsightGlobal/insight-constant';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
  @ViewChild(LoaderComponent, { static: true }) loader: LoaderComponent;
  constructor(private projectUtils: ProjectUtilsService) { }
  studentCount: any;
  showDashboard = false;
  ngOnInit() {
    this.getRegisteredStudentCount();
  }

  getRegisteredStudentCount() {
    this.loader.showLoader();
    const token = this.projectUtils.getToken();
    const body = this.projectUtils.getBodyOfHttp('', '');
    this.projectUtils.postMapping(InsightConstant.DASHBOARD_STUDENT_COUNT, body, token).subscribe((data) => {
      this.studentCount = data.count;
      this.showDashboard = true;
      this.loader.hideLoader();
    }, (errors: any) => {
      this.loader.hideLoader();
      this.studentCount = 'DataNotAvailable';
    });
  }
}
