import {Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import {AadminPage} from "../aadmin/aadmin";
import {UcomptesPage} from "../ucomptes/ucomptes";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public data;
  public http;



  constructor(public navCtrl: NavController, http: Http,private navParams: NavParams) {

    this.data = {};
    this.data.username = '';
    this.data.response = '';

    this.http = http;
  }

  retourNom(){
    return this.data.response;
  }

  testAcces(login, password) {
    var link = 'http://ztransfert.agilizer.info/acces.php';
    var data2 = JSON.stringify({username: login, password:password});

    this.http.post(link, data2)
      .subscribe(data => {
        this.data.response = data._body;
        if(data._body == "ADMIN"){this.navCtrl.push(AadminPage);}
        else { if(data._body != "" && data._body != "NO"){this.navCtrl.push(UcomptesPage,{param1: data._body, param2: login});} }
      }, error => {
        console.log("Oooops!");
      })
  }
}
