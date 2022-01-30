import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, RouteComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule, MatProgressSpinnerModule, MatSnackBarModule } from '@angular/material';
import { GoogleChartsModule } from 'angular-google-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login-pages/login/login.component';
import { SideNavigationComponent } from './pages/side-navigation/side-navigation.component';
import { DasboardComponent } from './pages/dasboard/dasboard.component';
import { ErrorComponent } from './pages/error/error.component';
import { DynamicTableComponent } from './component/dynamic-table/dynamic-table.component';
import { LoaderComponent } from './component/loader/loader.component';
import { ProjectAllotmentComponent } from './pages/project-allotment/project-allotment.component';
import { GuideManagementComponent } from './pages/guide-management/guide-management.component';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';
import { ReportGenerationComponent } from './pages/report-generation/report-generation.component';
import { ManageUserComponent } from './pages/manage-user/manage-user.component';
import { SupportComponent } from './pages/support/support.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { GroupAllotmentComponent } from './pages/group-allotment/group-allotment.component';
import { PopupModelComponent } from './component/popup-model/popup-model.component';
import { DynamicTableWithCheckBoxComponent } from './component/dynamic-table-with-check-box/dynamic-table-with-check-box.component';
import { DynamicTableWithTextBoxComponent } from './component/dynamic-table-with-text-box/dynamic-table-with-text-box.component';
import { GuideAllotmentComponent } from './pages/guide-allotment/guide-allotment.component';
import { AutoCompleteTextboxComponent } from './component/auto-complete-textbox/auto-complete-textbox.component';


@NgModule({
  declarations: [
    AppComponent,
    RouteComponent,
    LoginComponent,
    SideNavigationComponent,
    DasboardComponent,
    ErrorComponent,
    DynamicTableComponent,
    LoaderComponent,
    ProjectAllotmentComponent,
    GuideManagementComponent,
    EditProjectComponent,
    ReportGenerationComponent,
    ManageUserComponent,
    SupportComponent,
    RegistrationComponent,
    GroupAllotmentComponent,
    PopupModelComponent,
    DynamicTableWithCheckBoxComponent,
    DynamicTableWithTextBoxComponent,
    GuideAllotmentComponent,
    AutoCompleteTextboxComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    GoogleChartsModule,
    FormsModule,
    ReactiveFormsModule,
    SideNavigationComponent,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
