import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  usernameError = false;
  passwordError = false;

  uploadData = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private route: Router){ }

  ngOnInit(): void {
  }

  usernameValidation(){
    if(this.uploadData.value.username == "" || this.uploadData.value.username != "ANUJ"){
      this.usernameError = true;
    }
    else{
      this.usernameError = false;
    }
  }

  passwordValidation(){
    if(this.uploadData.value.password =="" || this.uploadData.value.password != "Chhabra"){
      this.passwordError = true;
    }
    else{
      this.passwordError = false;
    }
  }

  toAddDeleteData() {
    if(this.uploadData.value.username == "ANUJ" && this.uploadData.value.password == "Chhabra") {
      sessionStorage.setItem("USER_LOGGED_IN", "true");
      this.route.navigateByUrl("/addDeleteData")
    }
  }

}
