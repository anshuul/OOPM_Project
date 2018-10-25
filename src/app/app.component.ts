import { Component } from '@angular/core';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OopmProject';

  mobile = false;

  constructor(private location : PlatformLocation){
    this.location.onPopState(() => {
      if (this.mobile)
        this.toggleNav();
    })
  }
  toggleNav(){
    this.mobile = !this.mobile;
  }
}
