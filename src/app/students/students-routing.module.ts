import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentNavComponent } from './components/student-nav/student-nav.component';
import { StudentBodyComponent } from './components/student-body/student-body.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    children: [
      { path: '', component: StudentNavComponent },
      { path: 'list', component: StudentListComponent },
      { path: 'details', component: StudentDetailsComponent },
      { path: 'body', component: StudentBodyComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
