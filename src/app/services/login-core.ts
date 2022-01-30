import { LoginComponent } from '../login-pages/login/login.component';
import { LoaderComponent } from '../component/loader/loader.component';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectUtilsService } from './project-utils.service';
import { LoginCoreService } from './login-core.service';

export class LoginCore {
  @ViewChild(LoaderComponent, { static: true }) loader: LoaderComponent;
  model: any = {};
  constructor(protected loginService: LoginCoreService) {

  }
  login(myForm) {
    this.loginService.loader = this.loader;
    this.loginService.login(this.model.user, this.model.pass);
    this.timeOut();
  }
  timeOut() {
    setTimeout(() => {
      console.log('TimeOut Service Watching');

    }, 2000);
  }
}
