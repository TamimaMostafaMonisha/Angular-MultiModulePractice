import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { NavbarComponent } from './component/navbar/navbar.component';

const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'students',component: StudentsComponent, loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },
  { path: 'teachers',component: TeachersComponent, loadChildren: () => import('./teachers/teachers.module').then(m => m.TeachersModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
