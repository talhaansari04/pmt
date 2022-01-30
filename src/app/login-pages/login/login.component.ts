import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginCore } from 'src/app/services/login-core';
import { LoginCoreService } from 'src/app/services/login-core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends LoginCore implements OnInit {
  constructor(protected loginService: LoginCoreService) {
    super(loginService);
  }
  ngOnInit() {
    this.loginService.getIPAdress();
  }
}
