import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

const routes: Routes = [
  {
    path: "", component: LoginComponent
  },
  {
    path: "dashboard", component: DashboardComponent
  },
  {
    path: 'students', component: StudentListComponent
  },
  {
    path: 'student/add', component: StudentAddComponent
  },
  {
    path: 'student/edit/:id', component: StudentEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
