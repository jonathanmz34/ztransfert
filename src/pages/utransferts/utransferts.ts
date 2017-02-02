import { Component } from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {UtransfertaddPage} from "../utransfertadd/utransfertadd";

@Component({
  selector: 'page-utransferts',
  templateUrl: 'utransferts.html'
})
export class UtransfertsPage {
  public parameter1;
  public http;
  public data;
  public doub;

  constructor(public navCtrl: NavController,http:Http, private navParams: NavParams) {
    this.http = http;
    this.data = {};
  }

  ngAfterViewInit() {
    // After the view is initialized, this.userProfile will be available
    this.parameter1 = this.navParams.get('param1');
    var link = 'http://ztransfert.agilizer.info/transfertslist.php';
    var data2 = JSON.stringify({username: this.parameter1});
    this.listeTransferts(link, data2);
  }

  listeTransferts(link, data2){
    console.log(data2);
    this.http.post(link, data2)
      .subscribe(data => {
        this.data.response = data._body;
        this.doub = JSON.parse(this.data.response);
      }, error => {
        console.log("Oooops!");
      });
  }

  goNewtransfert(){
    this.navCtrl.push(UtransfertaddPage, {param1: this.parameter1 });
  }

}
