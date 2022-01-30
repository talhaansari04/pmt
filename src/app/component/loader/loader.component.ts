import { Component, OnInit, Injectable, Input } from '@angular/core';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})

export class LoaderComponent implements OnInit {
  show = false;

  constructor() { }

  ngOnInit() {
  }

  showLoader() {
    this.show = true;
  }
  hideLoader() {
    this.show = false;
  }
}
