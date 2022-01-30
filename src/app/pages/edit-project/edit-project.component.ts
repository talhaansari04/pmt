import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  changetab = 'One';
  constructor() { }

  ngOnInit() {
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
}
