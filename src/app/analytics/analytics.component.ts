import { AttendanceService } from './../attendance.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AngularFirestore } from '@angular/fire/firestore';
interface database {
  count: number,
  class: string,
  date: Date,
  division: string,
  rollnumbers: string,
  subject: string
}
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  LineChart = [];
  result : any;
  rollnumber_data: number[] = [];
  labels_data : string[] = []; 

  constructor(private afs : AngularFirestore, private attendanceSrv : AttendanceService) {
    let data = this.afs.collection('Attendance').valueChanges();
    data.subscribe(res => {
      this.result = res;
      console.log(this.result);
      console.log(this.result.length);
      for(let i = 0 ; i<this.result.length; i++){
        this.rollnumber_data.push(this.result[i].count)
        this.labels_data.push(this.result[i].subject + " " + this.result[i].date)
      }
      console.log(this.rollnumber_data);
      this.displayChart();
    });

   }

  ngOnInit() {
  }

  displayChart(){
    this.LineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: this.labels_data,
        datasets: [{
          label: "Day wise Attendance",
          data: this.rollnumber_data,
          fill: true,
          lineTension: 0.2,
          borderColor: "red",
          borderWidth: 1
        }]
      }, options: {
        title: {
          text: "Day Wise Attendance",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  }

}
