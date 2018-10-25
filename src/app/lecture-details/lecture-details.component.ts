import { Router } from '@angular/router';
import { AttendanceService } from './../attendance.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecture-details',
  templateUrl: './lecture-details.component.html',
  styleUrls: ['./lecture-details.component.scss']
})
export class LectureDetailsComponent implements OnInit {

  subject : string;
  class : string;
  division : string;
  date : Date;

  constructor(private attendanceSrv : AttendanceService, private router : Router) {
    if (!attendanceSrv.isLoggedIn) {
      this.router.navigate(['/home']);
    }
   }

  ngOnInit() {

  }

  addDetails(){
    this.attendanceSrv.class = this.class;
    this.attendanceSrv.division = this.division;
    this.attendanceSrv.subject = this.subject;
    this.attendanceSrv.date = this.date;
    this.router.navigate(['/attendance'])
  }
}
