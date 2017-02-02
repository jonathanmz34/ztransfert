import {Component} from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import {AcomptesPage} from "../acomptes/acomptes";
import {AtransfertsPage} from "../atransferts/atransferts";

@Component({
  selector: 'atransfertsdetails-about',
  templateUrl: 'atransfertsdetails.html',

})
export class AtransfertsdeatailsPage {
  public parameter1;
  public parameter2;
  public parameter3;
  public parameter4;
  public parameter5;
  public http;
  public data;

  constructor(public navCtrl: NavController, http:Http, private navParams: NavParams) {
    this.http = http;
    this.data = {};
  }

  ngAfterViewInit() {
    // After the view is initialized, this.userProfile will be available
    this.parameter1 = this.navParams.get('param1');
    this.parameter2 = this.navParams.get('param2');
    this.parameter3 = this.navParams.get('param3');
    this.parameter4 = this.navParams.get('param4');
    this.parameter5 = this.navParams.get('param5');
  }

  deleteTransfet(){
    var link = 'http://ztransfert.agilizer.info/transfertdel.php';
    var data2 = JSON.stringify({username:this.parameter2});

    this.http.post(link, data2)
      .subscribe(data => {
        this.data.response = data._body;
        console.log(this.data.response);
      }, error => {
        console.log("Oooops!");
      });
    this.navCtrl.push(AcomptesPage);
  }

  EnregTransfet(etat){
    var link = 'http://ztransfert.agilizer.info/transfertuptd.php';
    var data2 = JSON.stringify({username:this.parameter2, name:etat});

    this.http.post(link, data2)
      .subscribe(data => {
        this.data.response = data._body;
        console.log(this.data.response);
      }, error => {
        console.log("Oooops!");
      });
    this.navCtrl.push(AtransfertsPage);
  }

}
