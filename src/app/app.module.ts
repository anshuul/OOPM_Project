import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttendanceComponent } from './attendance/attendance.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { LectureDetailsComponent } from './lecture-details/lecture-details.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AttendanceComponent,
    AnalyticsComponent,
    LectureDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
