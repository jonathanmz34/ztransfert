import { Component } from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {AtransfertsdeatailsPage} from "../atransfertsdetails/atransfertsdetails";
import {AtransfertaddPage} from "../atransfertadd/atransfertadd";

@Component({
  selector: 'page-atransferts',
  templateUrl: 'atransferts.html'
})
export class AtransfertsPage {
  public parameter1;
  public http;
  public data;
  public doub;
  public enemy;

  constructor(public navCtrl: NavController,http:Http) {
    this.http = http;
    this.data = {};
  }

  ngAfterViewInit() {
    // After the view is initialized, this.userProfile will be available
    //this.parameter1 = this.navParams.get('param1');

    var link = 'http://ztransfert.agilizer.info/transfertslist.php';
    var data2 = JSON.stringify({username: ""});
    this.listeTransferts(link, data2);
  }

  listeTransferts(link, data2){

    this.http.post(link, data2)
      .subscribe(data => {
        this.data.response = data._body;
        console.log(this.data.response);
        this.doub = JSON.parse(this.data.response);
        console.log(this.doub);
      }, error => {
        console.log("Oooops!");
      });
  }

  goNewtransfert(){
    this.navCtrl.push(AtransfertaddPage, {param1: this.parameter1 });
  }

  goTransfertsdeatilsPage(nom,date,lien,lib,etat){
    this.navCtrl.push(AtransfertsdeatailsPage,{param1: nom, param2: lib, param3: date, param4: lien, param5: etat })


  }
  selectedFriends(){
    this.enemy = false;
  }

  selectedEnemies(){
    this.enemy = true;
  }

}
