import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { MatButtonModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { PopupModelComponent } from 'src/app/component/popup-model/popup-model.component';
import { SessionObject } from 'src/app/services/session-object';

const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule, MatSidenavModule];


@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})

export class SideNavigationComponent implements OnInit {
  @ViewChild(PopupModelComponent, { static: false }) popup: PopupModelComponent;
  constructor() { }

  block = 'none';

  ngOnInit() {

  }
  logout() {
    this.popup.showPopup();
  }
}
