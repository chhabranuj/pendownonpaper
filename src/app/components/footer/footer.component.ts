import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  links = [
    {
      title: "PenDownOnPaper",
      icon: "fa fa-instagram"
    },
    {
      title: "SabrKaPhal.com",
      icon: "fa fa-globe"
    },
    {
      title: "SabrKaPhal",
      icon: "fa fa-instagram"
    },
    {
      title: "Quot1vat1on",
      icon: "fa fa-instagram"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  visit(title: any){
    if(title == "PenDownOnPaper"){
      window.open("https://instagram.com/pendownonpaper", "_blank")
    }
    else if(title == "SabrKaPhal.com"){
      window.open("https://sabrkaphal.com", "_blank")
    }
    else if(title == "SabrKaPhal"){
      window.open("https://instagram.com/sabr.ka.phal", "_blank")
    }
    else {
      window.open("https://instagram.com/quot1vat1on", "_blank")
    }
  }

}
