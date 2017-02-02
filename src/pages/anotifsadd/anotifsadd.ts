import {Component, OnInit} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {AtransfertsPage} from "../atransferts/atransferts";
import {AcomptesPage} from "../acomptes/acomptes";
import {AnotifsPage} from "../anotifs/anotifs";
import {Http} from "@angular/http";

@Component({
  selector: 'page-anotifsadd',
  templateUrl: 'anotifsadd.html'
})
export class AnotifsaddPage implements OnInit{
  public data;
  public data2;
  public data3;
  public data6;
  public http;
  public doub;
  public doub2;


  constructor(public navCtrl: NavController, http: Http,private navParams: NavParams) {

    this.data = {};
    this.data.username = '';
    this.data.response = '';
    this.data2 = {};
    this.data3 = {};
    this.data6 = {};
    this.data2.username = '';
    this.data2.response = '';
    this.http = http;
  }

  ngOnInit(){

    var link = 'http://ztransfert.agilizer.info/notifsaddout.php';
    var link2 = 'http://ztransfert.agilizer.info/notifsaddin.php';
    var data3 = JSON.stringify({username:"out"});
    var data4 = JSON.stringify({username:"ADMIN"});
  this.http.post(link, data3)
      .subscribe(data => {
        this.data = (data._body);
        this.doub = JSON.parse(this.data);
      }, error => {
        console.log("Oooops!");
      })

    this.http.post(link2, data4)
      .subscribe(data => {
        this.data2.response = data._body;
        this.doub2 = JSON.parse(this.data2.response);
      }, error => {
        console.log("Oooops!");
      });

  }
  addNotif(pour, liens, messagenot) {
    var link = 'http://ztransfert.agilizer.info/notificationsadd.php';
    var data5 = JSON.stringify({name: pour, username:liens, mess:messagenot, etat:"Non consulté"});
    this.http.post(link, data5)
      .subscribe(data => {
        this.data6 = data._body;

        this.navCtrl.push(AnotifsPage);

      }, error => {
        console.log("Oooops!");
      })
  }
}
