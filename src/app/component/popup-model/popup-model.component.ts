import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-model',
  templateUrl: './popup-model.component.html',
  styleUrls: ['./popup-model.component.css']
})
export class PopupModelComponent implements OnInit {
  show: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  showPopup() {
    this.show = 'block';
  }
  hidePopup() {
    this.show = 'none';
  }
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('pmt/login');
  }
}
