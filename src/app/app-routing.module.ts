import { LectureDetailsComponent } from './lecture-details/lecture-details.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path : '',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'attendance',
    component: AttendanceComponent
  },
  {
    path : 'details',
    component : LectureDetailsComponent
  },
  {
    path: 'analytics',
    component: AnalyticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
