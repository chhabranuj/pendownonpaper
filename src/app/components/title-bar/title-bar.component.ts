import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  toMainPage() {
    this.route.navigateByUrl("/")
  }

  instaLink() {
    window.open("https://instagram.com/pendownonpaper", "_blank")
  }

  upload() {
    if(sessionStorage.getItem("USER_LOGGED_IN")) {
      this.route.navigateByUrl("/addDeleteData")
    }
    else {
      this.route.navigateByUrl("/upload")
    }
  }
}
