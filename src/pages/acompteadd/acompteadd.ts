import { Component } from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {AtransfertsPage} from "../atransferts/atransferts";
import {AcomptesPage} from "../acomptes/acomptes";
import {AnotifsPage} from "../anotifs/anotifs";
import {Http} from "@angular/http";

@Component({
  selector: 'page-acompteadd',
  templateUrl: 'acompteadd.html'
})
export class AcompteaddPage {
  public data;
  public http;



  constructor(public navCtrl: NavController, http: Http,private navParams: NavParams) {

    this.data = {};
    this.data.username = '';
    this.data.response = '';

    this.http = http;
  }


  addAcces(nom, login, pass) {
    var link = 'http://ztransfert.agilizer.info/accesadd.php';
    var data2 = JSON.stringify({name: nom, username:login, password:pass});
    console.log(data2);
    this.http.post(link, data2)
      .subscribe(data => {
        this.data.response = data._body;
        console.log(this.data.response)
        this.navCtrl.push(AcomptesPage);

      }, error => {
        console.log("Oooops!");
      })
  }
}
