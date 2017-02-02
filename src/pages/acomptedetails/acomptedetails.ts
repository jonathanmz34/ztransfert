import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {AcomptesPage} from "../acomptes/acomptes";

@Component({
  selector: 'acomptedetails-about',
  templateUrl: 'acomptedetails.html',

})
export class AcomptedeatailsPage {
  public parameter1;
  public parameter2;
  public parameter3;
  public liendepot;
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
    this.liendepot = "depots/" + this.navParams.get('param2') +"/";
  }

  dossierAcces(){
  //  this.navCtrl.push(this.liendepot);
    window.open(this.liendepot, '_system');

  }

  deleteAcces(){
    var link = 'http://ztransfert.agilizer.info/accesdel.php';
    var data2 = JSON.stringify({username:this.parameter1, name:this.parameter2});

    this.http.post(link, data2)
      .subscribe(data => {
        this.data.response = data._body;
        console.log(this.data.response);
      }, error => {
        console.log("Oooops!");
      });
    this.navCtrl.push(AcomptesPage);
  }

}
