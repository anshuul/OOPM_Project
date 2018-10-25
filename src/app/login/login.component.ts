import { AttendanceService } from './../attendance.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password : string;

  constructor(private auth: AngularFireAuth, private router : Router, private attendanceSrv : AttendanceService) { }

  ngOnInit() {
   
  }
  login()
  {
    console.log(this.email);
    console.log(this.password);
    this.auth.auth.signInWithEmailAndPassword(this.email, this.password).then(user => {
      console.log("signed in");
      console.log(user);
      this.attendanceSrv.isLoggedIn = true;
      this.router.navigate(['/home'])
    }).catch(err => {
      console.log('err');
    })
  }
}
