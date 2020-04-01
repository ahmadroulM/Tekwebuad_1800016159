import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentComponent } from './pages/student/student.component';
import { TeacherComponent } from './pages/teacher/teacher.component';

const routes: Routes = [
	{
		path:'home',
		component:HomeComponent 
	},
	{
		path:'student',
		component:StudentComponent
	},
	{
		path:'teacher',
		component:TeacherComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
