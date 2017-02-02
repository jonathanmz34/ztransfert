import {Component, OnInit} from '@angular/core';

import { NavController } from 'ionic-angular';
import {Http, Response} from "@angular/http";
import {AadminPage} from "../aadmin/aadmin";
import {UcomptesPage} from "../ucomptes/ucomptes";
import "rxjs/add/operator/map";
import {map} from "rxjs/operator/map";
import {AcompteaddPage} from "../acompteadd/acompteadd";
import {AcomptedeatailsPage} from "../acomptedetails/acomptedetails";

@Component({
  selector: 'page-acomptes',
  templateUrl: 'acomptes.html'
})
export class AcomptesPage implements OnInit{
  public data;
  public http;
  public doub = [];

  constructor(public navCtrl: NavController, http: Http) {
    this.data = [];
    this.data.username = '';
    this.data.response = '';

    this.http = http;
  }

  ngOnInit() {
    var link = 'http://ztransfert.agilizer.info/acceslist.php';


    this.http.post(link)
      .subscribe(data => {
        this.data.response = data._body;

        this.doub = JSON.parse(this.data.response);
        console.log(this.doub);
      }, error => {
        console.log("Oooops!");
      });
  }

  goNewcompte(){
    this.navCtrl.push(AcompteaddPage);
  }

  goAcomptedeatilsPage(nom,log,pas){
    this.navCtrl.push(AcomptedeatailsPage,{param1: nom, param2: log, param3: pas, })


  }
}
