import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  dataInfo: any;
  imageObject : any = [];

  data = [
    {
      title: "SabrKaPhal",
      content: "SabrKaPhal is an online platform where you can order your favourite fruits. The fruits will be delivered at your doorsteps after we hand-pick them from Azadpur Mandi."
    },
    {
      title: "Quot1vat1on",
      content: "Quot1vat1on is an instagram page, where you can find the world's most inspiring and best motivational quotes that will help you to become successful and a better person."
    }
  ]

  getData = gql`
    query{
      pendownonpaper_data{
        name,
        url
      }
    }
  `;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.query({query: this.getData})
    .subscribe((data:any) => {
      this.dataInfo = data['data']['pendownonpaper_data']
      console.log(this.dataInfo)
      for(let i=0; i<this.dataInfo.length; i++){
        this.imageObject.push({
          name: this.dataInfo[i]['name'],
          url: "https://drive.google.com/uc?export=view&id=" + this.dataInfo[i]['url'].split("/d/")[1].split("/view")[0],
        })
      }
    })
  }

  visitSite(title:any){
    if(title == "SabrKaPhal"){
      window.open("https://sabrkaphal.com", "_blank")
    }
    else {
      window.open("https://instagram.com/quot1vat1on", "_blank")
    }
  }

  visitInsta(title:any){
    if(title == "SabrKaPhal"){
      window.open("https://instagram.com/sabr.ka.phal", "_blank")
    }
    else{
      window.open("https://instagram.com/quot1vat1on", "_blank")
    }
  }
}
