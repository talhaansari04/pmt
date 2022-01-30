import { Injectable, ViewChild } from '@angular/core';
import { LoaderComponent } from '../component/loader/loader.component';
import { MatSnackBar } from '@angular/material';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectUtilsService {
  records: any;
  httpHeaders: any;
  constructor(public snackbar: MatSnackBar, private httpclient: HttpClient, private router: Router) {

  }
  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 2000,
      panelClass: ['blue-snackbar']
    });
  }
  getMapping(url: string): Observable<any> {
    return this.httpclient.get(url);
  }
  getBodyOfHttp(key: string, value: string) {
    const param = new HttpParams().set(key, value);

    return param;
  }


  postMapping(url: string, body: any, token: any): Observable<any> {
    const headers = this.getHttpOption(token);

    return this.httpclient.post(url, body, { headers });

  }

  private getHttpOption(token: string) {
    if (token !== '') {
      this.httpHeaders = new HttpHeaders().set('token', token).set('Content-Type', 'application/x-www-form-urlencoded');
    } else {
      this.httpHeaders = new HttpHeaders();
      console.log('token not found');

    }
    return this.httpHeaders;
  }
  getToken() {
    return localStorage.getItem('token');
  }
  expireJWT() {
    this.router.navigateByUrl('pmt/login');
  }
  clearLocalStorage() {
    localStorage.clear();
  }
}
