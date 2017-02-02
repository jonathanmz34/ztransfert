import { Component } from '@angular/core';

import {NavController} from 'ionic-angular';
import {Http} from "@angular/http";
import {AnotifsaddPage} from "../anotifsadd/anotifsadd";

@Component({
  selector: 'page-anotifs',
  templateUrl: 'anotifs.html'
})
export class AnotifsPage {
  public parameter1;
  public http;
  public data;
  public doub;

  constructor(public navCtrl: NavController,http:Http) {
    this.http = http;
    this.data = {};
  }

  ngAfterViewInit() {

    var link = 'http://ztransfert.agilizer.info/notificationslist.php';
    var data2 = JSON.stringify({username: ""});
    this.listeNotifications(link, data2);
  }

  masquer(lien, dest){
   // this.navCtrl.push(AnotifsaddPage);
    var link = 'http://ztransfert.agilizer.info/notificationshid.php';
    var data2 = JSON.stringify({username:lien, name:"archive", user:dest});

    this.http.post(link, data2)
      .subscribe(data => {
        this.data.response = data._body;
        console.log(this.data.response);
      }, error => {
        console.log("Oooops!");
      });
    this.navCtrl.push(AnotifsPage);
  }

  goNewnotif(){
    this.navCtrl.push(AnotifsaddPage);
  }

  listeNotifications(link, data2){
    console.log(data2);
    this.http.post(link, data2)
      .subscribe(data => {
        this.data.response = data._body;

        this.doub = JSON.parse(this.data.response);
      }, error => {
        console.log("Oooops!");
      });
  }
}
