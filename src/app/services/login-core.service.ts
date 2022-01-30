import { Injectable, ViewChild } from '@angular/core';
import { ProjectUtilsService } from './project-utils.service';
import { LoaderComponent } from '../component/loader/loader.component';
import { InsightConstant } from '../InsightGlobal/insight-constant';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class LoginCoreService {
  ipaddress: any;
  private _loader: LoaderComponent;
  constructor(protected projectUtil: ProjectUtilsService, private router: Router) { }
  login(username: string, pass: string) {
    this.loader.showLoader();
    const body = this.projectUtil.getBodyOfHttp('username', username).set('pass', pass);
    this.projectUtil.postMapping(InsightConstant.LOGIN, body, '').subscribe(
      (data) => {
        if (data['status'] === 'succes') {
          this.router.navigateByUrl('pmt/dashboard');
          localStorage.setItem('token', data['token']);
          this.loader.hideLoader();
        } else {
          this.loader.hideLoader();
          this.projectUtil.openSnackBar('Invalid', 'Credential');
        }
      },
      (error) => {
        this.loader.hideLoader();
        this.projectUtil.openSnackBar('Error', 'ServerNotRespond');
      });
  }

  getIPAdress() {
    this.projectUtil.getMapping('http://api.ipify.org/?format=json').subscribe((data) => {
      this.ipaddress = data;
      console.log(data);

    }, (errors: any) => {

    });
  }
  public get loader(): LoaderComponent {
    return this._loader;
  }
  public set loader(value: LoaderComponent) {
    this._loader = value;
  }
}
