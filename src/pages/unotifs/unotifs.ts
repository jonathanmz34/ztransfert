import { Component } from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";

@Component({
  selector: 'page-unotifs',
  templateUrl: 'unotifs.html'
})
export class UnotifsPage {
  public parameter1;
  public parameter2;
  public http;
  public data;
  public doub;
  public inputDisabled: boolean;

  constructor(public navCtrl: NavController,http:Http, private navParams: NavParams) {
    this.http = http;
    this.data = {};
    this.inputDisabled = true;
  }

  ngAfterViewInit() {
    // After the view is initialized, this.userProfile will be available
    this.parameter1 = this.navParams.get('param1');
    this.parameter2 = this.navParams.get('param2');
    console.log(this.parameter1 + "/" + this.parameter2);
    var link = 'http://ztransfert.agilizer.info/notificationslist.php';
    var data2 = JSON.stringify({username: this.parameter1});
    this.listeNotifications(link, data2);
  }

  listeNotifications(link, data2){

    this.http.post(link, data2)
      .subscribe(data => {
        this.data.response = data._body;

        this.doub = JSON.parse(this.data.response);
      }, error => {
        console.log("Oooops!");
      });
  }

  download(lien) {
    var link9 = "depots/ADMIN/"+lien;
        window.location.assign(link9);

    var link = 'http://ztransfert.agilizer.info/notificationsuptd.php';
    var data2 = JSON.stringify({username:lien, name:"Téléchargé", user:this.parameter1});

    this.http.post(link, data2)
      .subscribe(data => {
        this.data.response = data._body;
        console.log(this.data.response);
      }, error => {
        console.log("Oooops!");
      });
    this.navCtrl.push(UnotifsPage);

  }


}
