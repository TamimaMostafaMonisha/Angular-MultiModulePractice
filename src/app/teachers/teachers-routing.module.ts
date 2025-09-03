import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersComponent } from './teachers.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { TeacherDetailsComponent } from './components/teacher-details/teacher-details.component';
import { TeacherNavComponent } from './components/teacher-nav/teacher-nav.component';

const routes: Routes = [
  { path: '', redirectTo: '/teachers/tchList', pathMatch: 'full' },
  { path: 'tchNav', component: TeacherNavComponent },
  { path: 'tchList', component: TeacherListComponent },
  { path: 'tchDet', component: TeacherDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
