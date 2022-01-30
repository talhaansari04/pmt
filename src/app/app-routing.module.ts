import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-pages/login/login.component';
import { SideNavigationComponent } from './pages/side-navigation/side-navigation.component';
import { DasboardComponent } from './pages/dasboard/dasboard.component';
import { ErrorComponent } from './pages/error/error.component';
import { DynamicTableComponent } from './component/dynamic-table/dynamic-table.component';
import { ProjectAllotmentComponent } from './pages/project-allotment/project-allotment.component';
import { GuideManagementComponent } from './pages/guide-management/guide-management.component';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';
import { ReportGenerationComponent } from './pages/report-generation/report-generation.component';
import { ManageUserComponent } from './pages/manage-user/manage-user.component';
import { SupportComponent } from './pages/support/support.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { GroupAllotmentComponent } from './pages/group-allotment/group-allotment.component';
import { GuideAllotmentComponent } from './pages/guide-allotment/guide-allotment.component';
import { AuthGuardServiceGuard } from './pages/auth-guard-service.guard';


const routes: Routes = [
  {
    path: 'not-found',
    component: ErrorComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'pmt/login',
    component: LoginComponent
  }, {
    path: 'registration',
    component: RegistrationComponent
  }
  , {
    path: 'pmt',
    component: SideNavigationComponent,
    children: [
      {
        path: 'dashboard',
        component: DasboardComponent,
        canActivate: [AuthGuardServiceGuard]
      }, {
        path: 'group-allotment',
        component: GroupAllotmentComponent
      }, {
        path: 'project-allotment',
        component: ProjectAllotmentComponent
      }, {
        path: 'guide-mangement',
        component: GuideManagementComponent
      }, {
        path: 'edit-project',
        component: EditProjectComponent
      }, {
        path: 'report',
        component: ReportGenerationComponent
      }, {
        path: 'manage-user',
        component: ManageUserComponent
      }, {
        path: 'support',
        component: SupportComponent
      }, {
        path: 'guide-allotment',
        component: GuideAllotmentComponent
      }
    ]
  }, {
    path: '**',
    redirectTo: 'not-found'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
export const RouteComponent = [
];
