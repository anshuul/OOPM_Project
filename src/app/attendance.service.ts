import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  isLoggedIn : boolean = false;
  division : string;
  class : string;
  subject : string;
  date : Date;
  rollnumbers;
  count : number;
  
  constructor(private afs: AngularFirestore) { }

  addToDatabase(){
    this.afs.collection('Attendance').doc(this.date + "-" + this.subject).set({
      class : this.class,
      subject : this.subject,
      division : this.division,
      rollnumbers : this.rollnumbers,
      date : this.date,
      count : this.count
    }).then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    })
  }
}
