import {Component, OnInit} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {AtransfertsPage} from "../atransferts/atransferts";
import {AcomptesPage} from "../acomptes/acomptes";
import {AnotifsPage} from "../anotifs/anotifs";
import {Http} from "@angular/http";
import {Transfer} from "ionic-native";
import {UtransfertsPage} from "../utransferts/utransferts";
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'page-utransfertadd',
  templateUrl: 'utransfertadd.html'
})
export class UtransfertaddPage implements OnInit{
  public parameter1;
  public http;
  public data;
  public urlframe;
  public url: SafeResourceUrl;

  constructor(public navCtrl: NavController, public sanitizer:DomSanitizer, htpp:Http, private navParams: NavParams) {
    this.http;
    this.url;
    this.data;
    this.urlframe;

  }

  ngAfterViewInit() {

    this.parameter1 = this.navParams.get('param1');
    this.urlframe = "http://ztransfert.agilizer.info/upload.php?user=" + this.parameter1;

    this.url = this.sanitize();
  }

  ngOnInit(){

  }

  sanitize(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.urlframe);
    //return this.sanitizer.bypassSecurityTrustUrl(this.urlframe);
  }

  retourTransfertliste(){
    this.navCtrl.push(UtransfertsPage,{param1: this.parameter1 });
  }


}
