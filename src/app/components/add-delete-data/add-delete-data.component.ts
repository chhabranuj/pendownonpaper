import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-delete-data',
  templateUrl: './add-delete-data.component.html',
  styleUrls: ['./add-delete-data.component.css']
})
export class AddDeleteDataComponent implements OnInit {

  data = [
    {
      title: "ADD DATA",
      content: "Click here if you want to add a new image or drawing to our app. You just have to fill up the details we ask for i.e. the name of the painting (which should be different of every image as it is primary key) and the link of the image in google drive.",
      btn: "ADD",
    },
    {
      title: "DELETE DATA",
      content: "Click here if you want to delete a new image or drawing to our app. You just have to fill up the details we ask for i.e. the name of the painting (which is different of every image as it is primary key) so we can easily delete the data.",
      btn: "DELETE",
    }
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addDeleteDataDialog(type: any) {
    if(type == "ADD"){
      this.dialog.open(AddData);
    }
    else{
      this.dialog.open(DeleteData);
    }
  }
}



@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddData {

  nameError = false;
  urlError = false;
  data: any;

  addData = new FormGroup({
    name: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required)
  })

  constructor(public dialogRef: MatDialogRef<AddData>, private snackBar: MatSnackBar, private apollo: Apollo) { }

  name() {
    if(this.addData.value.name == ""){
      this.nameError = true;
    }
    else {
      this.nameError = false;
    }
  }

  url() {
    if(this.addData.value.url.includes("https://drive.google.com/")) {
      this.urlError = false;
    }
    else{
      this.urlError = true;
      console.log("hiya")
    }
  }

  back() {
    this.dialogRef.close();
  }

  add() {
    if(this.addData.value.name != "" && this.addData.value.url.includes("https://drive.google.com/")) {
      const sendData = gql`
        mutation insertData {
        insert_pendownonpaper_data(objects: {name: "${this.addData.value.name}", url: "${this.addData.value.url}"}){
        affected_rows
        }
      }
     `;

      this.apollo.mutate({mutation: sendData})
      .subscribe((data) => {
          this.snackBar.open("Data Added Successfully!!!", "X", {
          duration: 2000,
          panelClass: ['snackBar']
        });
        window.location.reload()
      })
    }
  }
}


@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.css']
})
export class DeleteData { 

  nameError = false;

  deleteData = new FormGroup({
    name: new FormControl('', Validators.required)
  })

  constructor(public dialogRef: MatDialogRef<AddData>, private snackBar: MatSnackBar, private apollo: Apollo) { }

  name() {
    if(this.deleteData.value.name == ""){
      this.nameError = true;
    }
    else {
      this.nameError = false;
    }
  }

  back() {
    this.dialogRef.close();
  }

  delete() {
    if(this.deleteData.value.name != "") {
      const deleteData = gql`
        mutation delete_data {
          delete_pendownonpaper_data(where: {name: {_eq: "${this.deleteData.value.name}"}}){
            affected_rows
          }
        }
      `;
      this.apollo.mutate({mutation: deleteData})
      .subscribe((data: any) => {
        this.snackBar.open("Data Deleted Successfully!!!", "X", {
          duration: 2500,
          panelClass: ["snackBar"]
        })
        window.location.reload()
      })
    }
  }
}
