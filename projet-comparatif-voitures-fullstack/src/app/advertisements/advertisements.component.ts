import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.css']
})
export class AdvertisementsComponent implements OnInit {
  adTitle:string="";
  adNbSiege:number=0;
  adBoiteVitesse:string="";
  adKilometrage:string="";
  adPrix:number=0;

  adtab:Array<any> = new Array<any>();
  constructor() { }

  ngOnInit(): void {
  }
  addad():void{
    var ad:any ={
      ad_id:Math.random(),
      adTitle:this.adTitle,
      adNbSiege:this.adNbSiege,
      adBoiteVitesse:this.adBoiteVitesse,
      adKilometrage:this.adKilometrage,
      adPrix:this.adPrix
    }
    this.adtab.push(ad);
  }
}
